import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 private sourceMessage=new BehaviorSubject('');
 currentMessage=this.sourceMessage.asObservable();
  constructor() { }

  messageSend(message:string){
    this.sourceMessage.next(message);
  }
}
