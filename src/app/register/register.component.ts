import { NotifierService } from 'angular-notifier';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from 'src/models/registerForm';
import { PasswordValidation } from './password.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  sent: boolean = false;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notifierService: NotifierService
  ) {
    this.registerForm = fb.group({
      firstName: ['', Validators.required],
      familyName: ['', Validators.required],
      pass:  ['', Validators.required],
      confirmPass: ['', Validators.required]
    },
    {
      validator: PasswordValidation.MatchPassword
    });
   }

  get f() { return this.registerForm.controls; }

  ngOnInit() {

  }

  onSubmit() {
    if (this.registerForm.invalid) {
      if (this.f.pass.value !== this.f.confirmPass.value) {
        this.notifierService.notify('error', 'Hasła nie są zgodne');
      }
      return;
    }
    this.sent = true;
    const form: RegisterForm = {
      firstName: this.f.firstName.value,
      familyName: this.f.familyName.value,
      password: this.f.pass.value,
    };

    this.authenticationService.register(form).subscribe(async (login: string) => {
      await this.notifierService.notify('success', 'Utworzono nowego użytkownika. Możesz się zalogować. Twój login to: ' + login + '');
      this.registerForm.reset();
      this.sent = false;
    },
    async err => {
      await this.notifierService.notify('error', 'Nie udało się zarejestrować');
    });
  }

}
