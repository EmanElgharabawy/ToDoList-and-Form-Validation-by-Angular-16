import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  name: string = '';
  age: number = 0;
  
  get namevalidation() {
    return this.name.length >= 5;
  }
  
  get agevalidation() {
    return this.age >= 18 && this.age <= 25;
  }
  
  get agetouched() {
    return this.age > 0;
  }
  
  get nametouched() {
    return this.name != '';
  }
  
  savedata(e: Event) {
    e.preventDefault();
    if (this.agevalidation && this.namevalidation) {
      console.log(this.name );
      console.log(this.age ); 
      this.age=0;
      this.name=''
    }
  }
  
}
