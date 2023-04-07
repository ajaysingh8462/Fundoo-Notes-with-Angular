import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notesArray: any



  constructor(private note: NotesServiceService) { }


  ngOnInit(): void {
    this.get()

    
  }
  receiveMsgFromDisplay($event: any) {
    this.get();


  }
  get(){
    this.note.getallnotes().subscribe((response: any) => {
      // console.log(response);

      this.notesArray = this.notesArray = response?.data?.filter((obj: any) => {
        return obj?.trash

      });
      // console.log(this.notesArray)


    });
  }
}
