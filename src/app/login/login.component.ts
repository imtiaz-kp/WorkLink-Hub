import { Component } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  constructor(private api:AdminApiService,private router:Router,private toster:ToastrService){}

 
  email:string=""
  password:string=""
  login(){
    if(this.email&&this.password){
     this.api.authenticate().subscribe({
      next:(res:any)=>{
        // console.log(res);
        const {email,password}=res
        if(email===this.email&& password===this.password){
          //save admin details
          localStorage.setItem("admin_name",res.name)
          localStorage.setItem("admin_pswd",res.password)
          this.toster.success("login succes")
          //just used api serviser for logout value true or false to show logout in the header section
          this.api.logout=true
          this.router.navigateByUrl('dashboard')
        }else{
          
          this.toster.warning("invalid email/password")
        }
      },
      error:(res:any)=>{
        this.toster.error(res.message)
      }
    })
  }else{
    this.toster.warning("please fill the form completely!!")
  }

  }
}
