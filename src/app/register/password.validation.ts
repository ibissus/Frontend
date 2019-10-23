import {AbstractControl} from '@angular/forms';

export class PasswordValidation {

    public static MatchPassword(AC: AbstractControl) {

       const password = AC.get('pass').value;
       const confirmPassword = AC.get('confirmPass').value;

       if ( password !== confirmPassword) {
            AC.get('confirmPass').setErrors( { MatchPassword: true } );
        } else {
            return null;
        }
    }
}
