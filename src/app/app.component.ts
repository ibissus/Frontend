import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/auth.service';
import { User } from 'src/models/user';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private notifierService: NotifierService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  title = 'Kompania Podchorążych';
  currentUser: User;
}
