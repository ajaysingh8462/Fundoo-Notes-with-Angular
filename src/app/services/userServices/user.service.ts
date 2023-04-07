import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  constructor(private httpservices: HttpService) {
    this.token = localStorage.getItem('token')
  }

  registration(reqdata: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })

    }
    return this.httpservices.postServices('User/UserRegister', reqdata, false, header)
  }
  login(reqdata: any) {
    console.log(reqdata)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })

    }
    return this.httpservices.postServices('User/login', reqdata, false, header)
  }
  forgetpassword(reqdata: any, token: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorrizaation': token
      })

    }
    return this.httpservices.postServices('User/ForgetPassword', reqdata, false, header)
  }
  resetpassword(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })

    }
    return this.httpservices.postServices('User/ResetPassword', reqdata, false, header)
  }
  



}
