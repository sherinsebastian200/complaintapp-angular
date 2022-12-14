import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  constructor(private api:ApiService){
    api.viewComplaints().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  data:any=[]
  }