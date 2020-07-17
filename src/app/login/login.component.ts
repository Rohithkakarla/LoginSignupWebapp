import { AuthserviceService } from './../services/authservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  constructor(public authserviceobj : AuthserviceService) {
    sessionStorage.clear();
   }

  form = new FormGroup({
      username : new FormControl(),
      password : new FormControl()
  });

  validation(){
    this.authserviceobj.checkusernameandpassword(this.form.value.username,this.form.value.password);
  }
}
