import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Token } from '@angular/compiler';
import { UserService } from 'src/app/services/userServices/user.service';
import { NotesServiceService } from 'src/app/services/notes-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {


  notesArray: any
  // @Input()searchFind:any




  constructor(private note: NotesServiceService) { }



  ngOnInit(): void {
    // this.getpin()
    this.get();


  }
  receiveMsgFromDisplay($event: any) {
    this.get();


  }
  receiveMsgCtrateToDisplay($event:any){
    this.get();

  }
  get() {
    this.note.getallnotes().subscribe((response: any) => {
      // console.log(response);
      // this.notesArray=response.data
      this.notesArray = response?.data?.filter((obj: any) => {
        return obj?.archive != true && obj?.trash != true 
      });
      const reversed=this.notesArray.reverse();
    })
  }
 



}
