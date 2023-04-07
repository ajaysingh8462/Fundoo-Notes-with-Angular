import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notesArray: any
  constructor(private note: NotesServiceService) { }
  ngOnInit(): void {
    this.archive()
  }
  archive() {
    this.note.getallnotes().subscribe((response: any) => {
      console.log(response);
      this.notesArray = response?.data?.filter((obj: any) => {
        return obj?.archive == true && obj?.trash != true
      });
      console.log(this.notesArray)
    });
  }
  receiveMsgFromDisplay($event: any) {
    this.archive();


  }
  
}
