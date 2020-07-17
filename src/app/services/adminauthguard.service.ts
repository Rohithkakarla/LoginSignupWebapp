import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService {

  constructor(
    private router : Router,
    private authserviceobj : AuthserviceService) { }

  canActivate(){
    if(this.authserviceobj.loginstatusmethod() && this.authserviceobj.userrolemethod()){
      return true;
    }
    if(this.authserviceobj.loginstatusmethod()) {
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}
