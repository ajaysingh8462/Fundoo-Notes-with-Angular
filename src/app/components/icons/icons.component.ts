import { Token } from '@angular/compiler';
import { Component, createComponent, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NotesServiceService } from 'src/app/services/notes-service.service';
import { ArchiveComponent } from '../archive/archive.component';
import { CreatenoteComponent } from '../createnote/createnote.component';
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesObj: any
  @Output() msgTrashToDisplay = new EventEmitter<string>();
  submitted = false
  istrash: boolean = false;
  isarchive = false;
  constructor(private note: NotesServiceService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    let comp_share = this.route.snapshot.component;
    if (comp_share == DisplaynotesComponent) {
      // this.isdisplay = true;
      // console.log(this.isdisplay)

    }
    if (comp_share == ArchiveComponent) {
      this.isarchive = true;

    }
    if (comp_share == TrashComponent) {
      this.istrash = true;

    }
    

  }
  colors: Array<any> = [
    { name: 'white' },
    { name: 'lightcoral' },
    { name: 'lawngreen' },
    { name: 'aqua' },
    { name: 'goldenrod' },
    { name: 'gray' },
    { name: 'rosybrown' },
    { name: 'pink' },
    { name: 'plum' },
    { name: 'olivedrab' },


  ];




  remove() {
    let payload = {
      notesid: [this.notesObj.notesId]

    };
    this.note.trash(payload, Token).subscribe((response: any) => {
      // console.log(response);
      this.msgTrashToDisplay.emit(response);
      this._snackBar.open("Notes add to trash", "undo", {
        duration: 3000,

      });

    });

  }
  putArchive() {
    let payload = {
      notesid: [this.notesObj.notesId]

    };
    this.note.archive(payload, Token).subscribe((response: any) => {
      // console.log(response);
      this.msgTrashToDisplay.emit(response);
      this._snackBar.open("Notes add to archive", "undo", {
        duration: 3000,

      });

    });
  }
  unarchive(){
    let payload={
      archive:false,
      trash:false,
      title:this.notesObj.title,
      description:this.notesObj.description,
      color:this.notesObj.color,
      notesId:[this.notesObj.notesId]

    };
    this.note.updatenotes(payload,Token).subscribe((response: any) => {
      // console.log(response);
      this.msgTrashToDisplay.emit(response);
      this._snackBar.open("Unarchive sccessfully", "ok", {
          duration: 3000,

        });

    });

  }
  restore(){
    let payload={
      archive:false,
      trash:false,
      title:this.notesObj.title,
      description:this.notesObj.description,
      color:this.notesObj.color,
      
      notesId:[this.notesObj.notesId]

    };
    this.note.updatenotes(payload,Token).subscribe((response: any) => {
      // console.log(response);
      this.msgTrashToDisplay.emit(response);
      this._snackBar.open("Restored notes sccessfully", "ok", {
          duration: 3000,

        });

    });

  }

  setColor(color: any) {
    // console.log(color);
    // console.log(this.notesObj)
    // console.log(this.notesObj.notesId)
    this.notesObj.color = color;

    let payload = {
      color: color,
      notesId: [this.notesObj.notesId]
    };
    this.note.updatecolor(payload, Token).subscribe((response: any) => {
      this._snackBar.open("Color updated", "ok", {
        duration: 3000,

      });

    });

  }
  deleteforever() {
    let payload = {
      notesid: [this.notesObj.notesId]

    };
    this.note.deletenotes(payload).subscribe((response: any) => {
      this.msgTrashToDisplay.emit(response);
      this._snackBar.open("Notes deleted forever", "undo", {
        duration: 3000,

      });

    });

  }


  onSubmit() {
    this.submitted = true;
    this.remove();


  }
  Submit() {
    this.putArchive();

  }
}