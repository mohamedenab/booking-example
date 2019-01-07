import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';



@Injectable()
export class AuthService {
  token: string;
  error: string;

  constructor(private router: Router) {
  }

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      response => {
        if(this.router.url.includes('/booking')) {
          this.router.navigate(['/checkout']);
        } else {
          this.router.navigate([`/booking`]);
        }
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => this.token = token
        );
      }
    ).catch(
      error => {
        this.error = error;
      }
    );
  }

  loginUser(email: string, password: string) {
    this.loading = true
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {

            if(this.router.url.includes('/booking')) {
            this.router.navigate(['/checkout']);
          } else {
            this.router.navigate([`/booking`]);
          }

          firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
          );

        }
      ).catch(
      error => {
        this.error = error;
      }
    );

  }

  gettoken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  get printErorr() {
    return this.error;
  }

  islogin() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut()
      .then((res) => this.router.navigate(['/']));
    this.token = null;
  }

  resetPassword(email: string) {
    var auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }
}
