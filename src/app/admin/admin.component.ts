import { AuthserviceService } from './../services/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  constructor(public authserviceobj : AuthserviceService) { 
  }

  

}
