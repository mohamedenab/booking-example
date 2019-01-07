import {DataService} from './booking/Booking.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookingComponent} from './booking/booking.component';
import {ContactComponent} from './contact/contact.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CollapseModule} from 'ngx-bootstrap';
import {AuthService} from './shared/auth.service';
import {AuthGuard} from './shared/auth.guard.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule
} from '@angular/material';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CheckoutdataComponent} from './booking/checkoutdata/checkoutdata.component';
import {SignupComponent} from './signup/signup.component';
import {FotterComponent} from './fotter/fotter.component';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    BookingComponent,
    CheckoutdataComponent,
    SignupComponent,
    FotterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule, MatIconModule,   MatDialogModule,
    NgbModule
  ],
  exports: [],
  providers: [AuthService, AuthGuard, DataService ],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent,SignupComponent]
})
export class AppModule {
}
