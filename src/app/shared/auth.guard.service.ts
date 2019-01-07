import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private auth: AuthService, private router:Router, public dialog: MatDialog){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.auth.islogin() ) {
        const dialogRe = this.dialog.open(LoginComponent, {
          width: '500px'
        });
        // if ()
      }
      return true;
    }

}
