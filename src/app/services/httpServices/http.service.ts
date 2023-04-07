import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl='https://localhost:44396/api/';

  constructor(private httpclient : HttpClient) { }
  
  postServices(url:string,reqdata:any,token:boolean=false,httpOptions:any){
    return this.httpclient.post(this.baseurl+url,reqdata,token && httpOptions)

  }
  getServices(url:string,token:boolean=false,httpOptions:any)
  {return this.httpclient.get(this.baseurl+url,token && httpOptions)
  
  }
  putService(url:string,reqdata:any,token:boolean=false,httpOptions:any)
  {return this.httpclient.put(this.baseurl+url,reqdata,token && httpOptions)
  
  }
  deleteService(url:string,reqdata:any,httpOptions:any)
  {return this.httpclient.delete(this.baseurl+url,reqdata&& httpOptions)
  
  }
  
}
