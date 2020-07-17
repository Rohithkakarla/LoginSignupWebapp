import { AdminauthguardService } from './services/adminauthguard.service';
import { AuthguardService } from './services/authguard.service';
import { AuthserviceService } from './services/authservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StorageService } from 'ngx-webstorage-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterpageComponent,
    DashboardComponent,
    NavigationbarComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent,
        canActivate :[AuthguardService]
      },
      {
        path:'register',
        component: RegisterpageComponent
      },
      {
        path:'admin',
        component: AdminComponent,
        canActivate:[AdminauthguardService]
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
