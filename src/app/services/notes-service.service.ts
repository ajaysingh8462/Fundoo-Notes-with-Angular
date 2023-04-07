import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  token: any
  constructor(private httpservices: HttpService) {
    this.token = localStorage.getItem('token')
  }

  createnote(reqdata: any, token: any) {
    // console.log(reqdata);
    // console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })

    }
    return this.httpservices.postServices('Notes/AddNotes', reqdata, true, header)

  }
  getallnotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })

    }
    return this.httpservices.getServices('Notes/ShowNotes', true, header)

  }
  trash( reqdata: any ,token:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })

    }
    return this.httpservices.putService(`Notes/TrashNotes?notesid=${reqdata.notesid}`,reqdata,true,header)

  }
  archive( reqdata: any ,token:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })

    }
    return this.httpservices.putService(`Notes/Archive?notesid=${reqdata.notesid}`,reqdata,true,header)

  }
  updatenotes( reqdata: any ,token:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
      

    }
    // console.log(reqdata)
    return this.httpservices.putService(`Notes/EditNotes?notesid=${reqdata.notesId}`,reqdata,true,header)
  }
  updatecolor( reqdata: any ,token:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
      

    } 
    // console.log(reqdata)
    return this.httpservices.putService(`Notes/Color?notesid=${reqdata.notesId}&color=${reqdata.color}`,reqdata,true,header)
  }
  deletenotes(reqdata: any ){
  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+this.token
    })
    

  } 
  // console.log(reqdata)
  return this.httpservices.deleteService(`Notes/DeleteNotes?notesid=${reqdata.notesid}`,reqdata,header)

  }



}
