import { Component } from '@angular/core';
import { ControlBase } from './control-base';
import { ControlService} from './control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee = {
    name: 'Faysal',
    age: '24',
    sex: ['Male', 'Female'],
    designation: ['Software Engineer', 'Web Developer', 'System Analyst']
  }

  product = {
    name: 'one plus 5',
    varient: ['1GB', '2GB', '3GB'],
    color: ['Grey','Black', 'Red']
  }

  book = {
    name: 'Theory of everything',
    author: 'anonymous',
    language: ['En','Bn','Fr']
  }
  form;
  show = 1;
  constructor() {
    this.form = this.product;
  }

  onChange(value){
    this.show =value;
    if (value == 1) {
      this.form = this.product;
    }
    if (value == 2) {
      this.form = this.employee;          
    } 
    else if( value == 3) {
      this.form = this.book;        
    }
  }
  
}

