import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hide = true;
  hid = true;
  loading = false;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<SignupComponent>, public dialog: MatDialog, private auth: AuthService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.passwordConfirming});
    this.signupForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true};
    }
  }


  onValueChanged(data?: any) {
    if (!this.signupForm) {
      return;
    }
    const form = this.signupForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid || control.touched) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email'
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at least one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    }
  };

  onClick(): void {
    this.dialogRef.close();
    const dialogRe = this.dialog.open(LoginComponent, {
      width: '500px'
    });
  }

  submited() {
    // this.loading=true;
    this.dialogRef.close();
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.auth.signUp(email, password);
  }
  // islogin(){
  //   if (this.auth.islogin()){
  //     this.loading=false
  //   }
  // }
}

