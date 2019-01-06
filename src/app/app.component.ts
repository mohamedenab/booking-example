import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA1g8WlVr7xXy0-YhOcf02JS_CS7XJcNLQ",
      authDomain: "task-8d71c.firebaseapp.com",
      databaseURL: "https://task-8d71c.firebaseio.com",
      projectId: "task-8d71c",
      storageBucket: "task-8d71c.appspot.com",
      messagingSenderId: "1016282578461"
    });
  }

}
