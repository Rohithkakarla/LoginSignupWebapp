import { AuthserviceService } from './authservice.service';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(
    private router : Router,
    private authserviceobj : AuthserviceService) { }

  canActivate(){
    if(this.authserviceobj.loginstatusmethod()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
