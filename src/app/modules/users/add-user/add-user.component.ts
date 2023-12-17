import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../users.model';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:UsersModel={}

  constructor(private api:UserApiService,private router:Router,private toster:ToastrService){}
  
  



  addUser(){
    console.log(this.user)
    this.api.addUserAPI(this.user).subscribe({
      next:(res:UsersModel)=>{
        this.toster.success("new user added successfully!!!")
        this.router.navigateByUrl('/users')
      },
        error:(err:any)=>{
        this.toster.error(err.message)
      }
    })

  }
  cancel(){
    this.user={}
  } 
  


}
