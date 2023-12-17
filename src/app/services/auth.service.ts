import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogined(){
    return!!localStorage.getItem("admin_name")
  }
}
