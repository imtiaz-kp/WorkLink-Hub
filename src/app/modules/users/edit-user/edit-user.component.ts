import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { UsersModel } from '../users.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
user:UsersModel={}
 constructor(private route:ActivatedRoute,private api:UserApiService,private router:Router,private toster:ToastrService){}

 ngOnInit(): void {
     this.route.params.subscribe((res:any)=>{
      console.log(res)
      const {id}=res
      //api call to get details of id
      this.getExistingUser(id)
     })
 }
 getExistingUser(id:any){
 this.api.viewUserAPI(id).subscribe((res:any)=>{
  this.user=res

})
 }
 editUser(id:any){

  this.api.updateUserAPI(id,this.user).subscribe({
   next:(res:any)=>{
    this.toster.success("User Update Successfully")
    this.router.navigateByUrl('/users')
   },error:(err:any)=>{
    this.toster.error(err.message)
   }
  })
 
  }
cancel(id:any){
 this.getExistingUser(id)
  this.router.navigateByUrl('/users')
}


}
