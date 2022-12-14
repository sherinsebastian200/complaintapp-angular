import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  userid:any=""
  userdata:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userInfo")
  let data:any={
    "id":this.userid
  }
  this.api.getProfileDetails(data).subscribe(
    (response:any)=>
    {
      this.userdata=response;
    }
  )
  }
}
