import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {BookingComponent} from './booking/booking.component';
import {ContactComponent} from './contact/contact.component';
import {AuthGuard} from './shared/auth.guard.service';
import {CheckoutdataComponent} from './booking/checkoutdata/checkoutdata.component';
import {SignupComponent} from './signup/signup.component';

const appRoutes: Routes =[
  {path:'login' , component: LoginComponent},
  {path:'signup' , component: SignupComponent},
  {path:'' , component: BookingComponent},

  {path:'booking', component:BookingComponent},
  {path:'checkout', component:CheckoutdataComponent, canActivate:[AuthGuard]},
  {path:'contact-us', component:ContactComponent} ,
  {path:'**' , component: BookingComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),

  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
