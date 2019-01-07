import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;

  clickEvent() {
    this.status = !this.status;
    this.isCollapsed = !this.isCollapsed;
  }

  isCollapsed = true;

  constructor(public auth: AuthService, private route: ActivatedRoute, private modalService: NgbModal,public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px'
    });
  }

  logout() {
    this.auth.logout();
  }


}
