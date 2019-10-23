import { User } from './../models/user';

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterForm } from 'src/models/registerForm';
import { Soldier } from 'src/models/soldier';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { reject } from 'q';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private url: string;

  constructor(private http: HttpClient, @Inject('API_URL') url: string, private router: Router) {
    this.url = url;
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string) {
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.post<any>(this.url + 'auth', { }, { params: { login: login, password: password } })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  register(form: RegisterForm) {
    return this.http.post(this.url + 'register', form);
  }

  updateSoldierDetails() : Promise<any> {
    return new Promise((resolve, reject) => {
      const user = this.currentUserValue;
      this.http.get(this.url + 'soldier/' + user.userId)
        .subscribe(async (data: Soldier) => {
          user.soldier = data;
          await localStorage.setItem('currentUser', JSON.stringify(user));
          resolve(JSON.parse(localStorage.getItem('currentUser')));
        });
    });
  }
}
