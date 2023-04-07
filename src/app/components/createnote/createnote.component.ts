import { Token } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/services/notes-service.service';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  @Output() msgCreateToGetall= new EventEmitter<string>();
  panelOpenState = false;
  submitted = false;
  title = '';
  description = '';
  color='';

  constructor(private note: NotesServiceService,private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }
  colorData: Array<any> = [
    { name: 'white' },
    { name: 'red' },
    { name: 'blue' },
    { name: 'aqua' },
    { name: 'yellow' },
    { name: 'gray' },
    { name: 'brown' },
    { name: 'pink' },
    { name: 'purple' },
    { name: 'orange' },
  ];


  onSubmit() {
    if(this.title=='' && this.description=='')
    {
      this.submitted=false;
      // this.panelOpenState=false;
    }
    else{
      this.submitted = true;


    let payload = {
      title: this.title,
      description: this.description,
      // color:this.color

    };
    this.note.createnote(payload, Token).subscribe((response: any) => {
      this.panelOpenState = false;
      this.msgCreateToGetall.emit(response);
      this._snackBar.open("Notes added Successfully","ok",{
        duration:3000,
        

      });
      this.title='';
      this.description='';


    });

    }
    

  }


}

