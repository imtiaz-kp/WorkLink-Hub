import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  
  logout:boolean=false


  SERVER_url ="https://worklink-hub.onrender.com"

  constructor(private http:HttpClient) { }
  authenticate(){

    //api call - http//localhost:3000/users/1
   return this.http.get(`${this.SERVER_url}/users/1`)
  }

  updateAdmin(admin:any){

    //api call - http//localhost:3000/users/1
   return this.http.put(`${this.SERVER_url}/users/1`,admin)
  }

}
