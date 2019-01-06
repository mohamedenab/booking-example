import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder, public auth: AuthService, private modalService: NgbModal ,public activeModal: NgbActiveModal) {
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
    this.auth.loginUser(email, password);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, {centered: true});
  }

  resetPassword() {
    this.auth.resetPassword(this.loginForm.value['email']);

  }
}
