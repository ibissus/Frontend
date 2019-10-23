import { User } from 'src/models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/services/auth.service';
import { first } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notifierService: NotifierService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

    this.loginForm = fb.group({
      login: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.f.login.value, this.f.pass.value)
    .pipe(first())
    .subscribe((data: User) => {
      this.router.navigate([this.returnUrl]);
    },
      async err => {
        /*if (err.status === 403 || err === 'Forbidden') {
          await this.notifierService.notify(
            'error',
            'Podchorążowie nie mają dostępu do tego systemu'
          );
        }*/
        await this.notifierService.notify('error',
          'Logowanie niedane'
        );
      });
  }

}
