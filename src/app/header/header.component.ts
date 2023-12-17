import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 constructor(private router:Router,public adApi:AdminApiService){}
 
 
 

 
 
 logout(){
  localStorage.removeItem("admin_name")
  localStorage.removeItem("admin_pswd")
  this.router.navigateByUrl("")
  this.adApi.logout=false

  

 }
 

  

}
