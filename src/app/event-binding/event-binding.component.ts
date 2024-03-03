import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  isapplayed:boolean=true;
  printname(value:string)
  {
    console.log(value);
    
  }
  printage(value:string)
  {
    console.log(value);
    
  }

  printdiv:string=""
  printsub(value:string)
  {
    this.printdiv=value
  }
}
