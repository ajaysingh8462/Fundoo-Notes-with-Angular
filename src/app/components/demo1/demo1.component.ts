import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit, OnChanges{
  
  
  name:string='';
  fullNameArray:any=[]; 

  ngOnChanges(changes: SimpleChanges): void {
   console.log(this.fullNameArray)
  }

  ngOnInit(): void {
    
  }
  submit(){
    this.fullNameArray.push(this.name);
    console.log(this.fullNameArray)

  }


}
