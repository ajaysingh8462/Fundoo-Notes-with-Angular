import { Token } from '@angular/compiler';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  @Output() msgTrashToDisplay= new EventEmitter<string>();
  notes:any
  title: ''
  description: ''
  notesId: any
  colors:''


  constructor( private note:NotesServiceService, private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { this.notes=data;
    this.title=data.title;
    this.description=data.description;
    this.colors=data.color;
    this.notesId=data.notesId;
    
  }
  
  
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  closeDialog(){
    let payload={
      title:this.title,
      description:this.description,
      color:this.colors,
      notesId:this.notesId
      
      
    };
    this.note.updatenotes(payload,Token).subscribe((response: any) => {
      // console.log(response);
      this.dialogRef.close(response)
      this.msgTrashToDisplay.emit(response);
      this._snackBar.open("notes updated ", "ok", {
          duration: 3000,

        });

    });
  

  }


}
