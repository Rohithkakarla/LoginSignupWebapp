import { AuthserviceService } from './../services/authservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {

  constructor(public authserviceobj : AuthserviceService) { }

  form = new FormGroup({
    name : new FormControl(),
    username : new FormControl(),
    password : new FormControl()
});

registration(){
  this.authserviceobj.register(this.form.value.name,this.form.value.username,this.form.value.password);
}

}
