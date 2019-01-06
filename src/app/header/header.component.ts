import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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

  constructor(public auth: AuthService, private route: ActivatedRoute,private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, {centered: true });
  }
}
