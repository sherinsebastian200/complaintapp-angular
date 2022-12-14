import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ComplaintAddComponent } from './complaint-add/complaint-add.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ViewmyComplaintComponent } from './viewmy-complaint/viewmy-complaint.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"register",
    component:UserRegistrationComponent
  },
  {
    path:"view",
    component:ViewProfileComponent
  },
  {
    path:"dashboard",
    component:DashBoardComponent
  },
  {
    path:"addcomplaint",
    component:ComplaintAddComponent
  },
  {
    path:"mycomplaint",
    component:ViewmyComplaintComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    ComplaintAddComponent,
    DashBoardComponent,
    NavBarComponent,
    AdminNavbarComponent,
    ViewmyComplaintComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
