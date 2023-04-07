import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  ngOnInit(): void {

  }











  // @Output()
  // searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  // onSearch() { this.searchTextChange.emit(this.searchvalue); }
}
//  ngOnChanges(){
//    @input message :string

// whene ever message is change ngOnChanges get called
// and also when ever any new component created then also

//    <app>
//    [message]="hellow"
//    </app>
//  }

// ngOnInit
// when ever any new component created it invokes after ngonchanges is called,
// ngoninit is called only ones  and imidiatly after creation during first changes is detacted
// it gives accses for evry input property 

  // ngDoCheck

  // this invokes during every change detecttion cycle this
  // invoke even if there is no changes input bound properties
  // this used for custom change detaction whenever
  // angular falied to check made to input properties

  // ngAfterContantInit

  // this will called only once when ever any coponent contangent chenges first time

  // ngAfterContantChecked

  // this will called  when ever any coponent contangent chenges

  // ngAfterViewInit

  // Respond after Angular initializes the component
  // 's views and child views, or the view that contains the directive.
  // Called once after the first

  // ngAfterViewChecked()

  // its similer to  ngAfterViewInit and this will called
  // after every changes made in child component or directive

  // ngOnDestroy()
  // Cleanup just before Angular destroys the directive or component.
  //  Unsubscribe Observables and detach event handlers to avoid memory leaks
  //  Called immediately before Angular destroys the directive or component.



