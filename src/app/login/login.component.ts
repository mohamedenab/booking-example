import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {SignupComponent} from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder,private dialogRef: MatDialogRef<LoginComponent>, public dialog: MatDialog,public auth: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['',
        [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    const email = this.f.username.value;
    const password = this.f.password.value;
    this.auth.loginUser(email, password)
    this.dialogRef.close();

  }


  onClick(): void {
    this.dialogRef.close();
    const dialogRe = this.dialog.open(SignupComponent, {
      width: '500px'
    });
  }
  resetPassword() {
    this.auth.resetPassword(this.loginForm.value['email']);

  }
}
