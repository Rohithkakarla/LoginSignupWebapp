import { AuthserviceService } from './../services/authservice.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent {

  constructor(public authserviceobj : AuthserviceService) {
    
  }

  
  


}
