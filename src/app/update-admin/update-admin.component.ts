import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';

import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  constructor(private api:AdminApiService,private toster:ToasterService){}
  @Output() onAdminChange=new EventEmitter()
  adminDetails:any
  ngOnInit(): void {
      this.api.authenticate().subscribe((res:any)=>{
        this.adminDetails=res
        if(res.picture){
          this.profileImage=res.picture
        }

      })
  }
  profileImage:string="./assets/images/avatar-profile-picture.jpg"
  editAdminStatus:boolean=false
  editAdminClicked(){
    this.editAdminStatus=true
 }
     
getFile(event:any){
  let file=event.target.files[0]

  let fr= new FileReader
  fr.readAsDataURL(file)
  fr.onload=(event:any)=>{
    this.profileImage=event.target.result
    this.adminDetails.picture=this.profileImage
  }
}
updateAdmin(){
  this.api.updateAdmin(this.adminDetails).subscribe({
      next:(res:any)=>{
      this.toster.showSuccess("Admin details updated successfully")
      localStorage.setItem("admin_name",res.name)
      localStorage.setItem("admin_pswd",res.password)
      this.editAdminStatus=false
      this.onAdminChange.emit(res.name)

    },error:(err:any)=>{
      this.toster.showError("updation failed !!! please try after some time")
    }
  })
}

cancel(){
  this.editAdminStatus=false
}

}
