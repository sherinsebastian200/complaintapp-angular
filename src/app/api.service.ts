import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  getProfileDetails=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/view",dataToSend)
  }
  addLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/userlogin",dataToSend)
  }
  addComplaint=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addComplaint",dataToSend)
  }
  
  viewComplaints=()=>
    {
      return this.http.get("http://localhost:8080/viewall")
    }
  viewMyComplaints=(dataToSend:any)=>
  {
      return this.http.post("http://localhost:8080/mycomplaint",dataToSend)
  }
  }