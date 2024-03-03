import { Component } from '@angular/core';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})
export class ToDOListComponent {
 todolist:string[]=[]
 value:string=''
 addtodolist() {
  if (this.value.trim() !== "") {
      this.todolist.push(this.value);
      this.value = '';
  } else {
      alert("Please enter your task");
  }
}

 removetodo(i:number)
 {
  this.todolist= this.todolist.filter((item,index)=>index != i)
 }
 get entertask()
 {
  return this.value !=''
 }
}
