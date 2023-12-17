import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UsersModel } from '../users.model';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  p:number=1
  searchKey:string=""


  allUsers:UsersModel[]=[]
constructor(private api:UserApiService){}


  ngOnInit(): void {
      this.getallusers()
  }

  getallusers(){
    this.api.getAllUserAPI().subscribe({
      next:(res:any)=>{
        this.allUsers=res
      },error:(err:any)=>{
       alert(err.message)
      }
    })
  }

  removeUser(id:any){

    this.api.deleteUserAPI(id).subscribe({
      next:(res:any)=>{
        alert('user removed')
        this.getallusers()
      },error:(err:any)=>{
       alert(err.message)
      }
    })
  
  }


  sortById(){
    this.allUsers.sort((a:any,b:any)=>a.id-b.id)
    console.log(this.allUsers)
  }
  sortByName(){
    this.allUsers.sort((a:any,b:any)=>a.name.localeCompare(b.name))
    console.log(this.allUsers)
  }

  generatePdf(){
    let pdf = new jsPDF()
    let head =[['id','Username','Email','Status']]
    let body:any=[]
    this.allUsers.forEach((item:any)=>{
      body.push([item.id,item.name,item.email,item.active])
    })
    pdf.setFontSize(16)
    pdf.text("All Users List",10,10)
    autoTable(pdf,{head,body})
    pdf.output('dataurlnewwindow')
    pdf.save('alluserslist.pdf')

  }


}
