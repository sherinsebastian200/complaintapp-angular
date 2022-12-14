import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmy-complaint',
  templateUrl: './viewmy-complaint.component.html',
  styleUrls: ['./viewmy-complaint.component.css']
})
export class ViewmyComplaintComponent {
  userId:any=""
  data:any=[]
  constructor(private api:ApiService){

    this.userId=localStorage.getItem("userInfo")
    let data:any={
      "userId":this.userId
    }
    this.api.viewMyComplaints(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
  
  
 
}