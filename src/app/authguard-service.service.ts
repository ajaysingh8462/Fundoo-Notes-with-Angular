import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor(private _router:Router) { }

  logout() {
    this._router.navigate(["/login"])
    return localStorage.removeItem("token")
    
    
  }

  gettoken() {
    return !!localStorage.getItem("token");
  }

}
