import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  address=""
  email=""
  phone=""
  username=""
  password=""
  confirm=""
constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={
  
      "name":this.name,"address":this.address,"email":this.email,
      "phone":this.phone,"username":this.username,"password":this.password,"confirm":this.confirm
  
    }
    console.log(data)
    this.api.addUser(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("user registered successfully")
          this.address=""
          this.confirm=""
          this.email=""
          this.name=""
          this.password=""
          this.phone=""
          this.username=""
        } else {
          alert("wrong")
        }
      }
    )
  }

}