import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../modules/users/user-api.service';
import {  Router } from '@angular/router';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private api:UserApiService,private router:Router,private adApi:AdminApiService){}
 admin:string=""
 employeeCount:number=0
  selected: Date | null=new Date() ;

  showSidebar:boolean=true

 ngOnInit(): void {
     if(localStorage.getItem("admin_name")){
     this.admin=localStorage.getItem("admin_name")||""
     this.getEmployeeCount()
     }
     this.adApi.logout=true
 }

  menuBtnClick(){
    this.showSidebar=!this.showSidebar
  }

  getEmployeeCount(){
    this.api.getAllUserAPI().subscribe((res:any)=>{
      this.employeeCount=res.length-1
    })
  }

  getUpdatedAdminName(event:any){
    this.admin=event
  }
  
  
}
