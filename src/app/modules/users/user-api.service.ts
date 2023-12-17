import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }
  SERVER_url = "https://worklink-hub.onrender.com"
  //add user api
  addUserAPI(user: UsersModel) {


    return this.http.post(`${this.SERVER_url}/users`, user)
  }

  //get all user
  getAllUserAPI(){

 
   return this.http.get(`${this.SERVER_url}/users`)
  }
  //delete user api
  deleteUserAPI(id:string){

 
    return this.http.delete(`${this.SERVER_url}/users/${id}`)
   }
   //view user
   viewUserAPI(id:any){
    return this.http.get(`${this.SERVER_url}/users/${id}`)
   }
   

   //edit User api
   updateUserAPI(id:any,user:UsersModel){
    return this.http.put(`${this.SERVER_url}/users/${id}`,user)

   }

}
