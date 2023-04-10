import { Token } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/dataServices/data.service';
import { NotesServiceService } from 'src/app/services/notes-service.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() child: any;
  @Output() msgDisplayToGetAllNotes = new EventEmitter<string>();
  notes: any;
  Search='';
  // msg:any


  constructor(private note: NotesServiceService, private dialog: MatDialog,private dataService:DataService) { }
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((result:any)=>{
      this.Search=result;
     

    });
  }


  openDialog(notes: any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '40%',
      // heigth: 'auto',
      panelClass: 'updateDialog',
      data: notes
      
    });
   
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.msgDisplayToGetAllNotes.emit(result);
      
    });
  }
  receiveMsgTrashToDisplay($event:any){
    
    this.msgDisplayToGetAllNotes.emit($event);

  }


}
