import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
 this.isCollapsed =  !this.isCollapsed
  }
  isCollapsed = true;
  constructor() { route: ActivatedRoute}

  ngOnInit() {
  }

}
