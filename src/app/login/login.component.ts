import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error:string;
  constructor( private formBuilder: FormBuilder,private auth: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',[ Validators.required, Validators.email]],
      password: ['',
       [ Validators.required,Validators.minLength(6)]]
    });

    this.auth.logout()
  }
  get f() { return this.loginForm.controls; }

  login() {
    const email = this.f.username.value;
    const password = this.f.password.value;
    this.auth.loginUser(email, password);
  }
  resetPassword() {
    this.auth.resetPassword(this.loginForm.value['email'])

  }
}
