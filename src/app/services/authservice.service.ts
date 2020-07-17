import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router: Router) {
    
  }

  loginstatusmethod(){
   if(sessionStorage.getItem('username'))
    {
      return true;
    }
    else{
      return false;
    }
  }

  userrolemethod(){
    if( sessionStorage.getItem("admin") == "true")
    {
        return true;
    }
    else
    {
      return false;
    }
  }

  invalidlogin :boolean;
  userdata:any;

  checkusernameandpassword(username,password)
  {
    console.log("checking the username and password...");
    let usersobj :any =  JSON.parse(localStorage.getItem("userdata"));
    let x : any;
    for(x in usersobj){
      if(usersobj[x].username == username && usersobj[x].password == password)
      {
        this.userdata = usersobj[x];
        
        sessionStorage.setItem('username',usersobj[x].username);
        sessionStorage.setItem('admin',usersobj[x].admin);

        this.router.navigate(['/dashboard']);
        console.log("admin status : "+(this.loginstatusmethod() && this.userrolemethod()));
      
        this.invalidlogin = false;
        break;
      }
      else
      {
        this.invalidlogin = true;
      }
    }
  }

  register(name,username,password)
  {
    let usersobj :any =  JSON.parse(localStorage.getItem("userdata"));
    usersobj.push({"name":name,"username":username,"password":password,"admin":false});
    localStorage.setItem('userdata', JSON.stringify(usersobj));
    this.router.navigate(['/login']);
  }

  getalluser(){
    if(sessionStorage.getItem("admin")=="true")
    {
      return JSON.parse(localStorage.getItem("userdata"));
    }
    else
    {
      this.router.navigate(['/dashboard']);
    }
  }
  
}
