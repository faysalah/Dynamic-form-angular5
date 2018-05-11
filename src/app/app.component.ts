import { Component } from '@angular/core';
import { ControlBase } from './control-base';
import { TextboxControl } from './textbox-control';
import { DropdownControl } from './dropdown-control';
import { isArray } from 'util';

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
  controls = [];
  constructor() {
  //  this.createControls(this.employee);
   this.createControls(this.product);
  }

  createControls(model){
    let fieldsNames = Object.keys(model);
    fieldsNames.forEach(key => {
      if (!isArray(model[key])) {
        this.controls.push(new TextboxControl({
          key: key,
          label: key.toUpperCase(),
          value: '',
          required: true
        }))
      } else {
        this.controls.push(new DropdownControl({
          key: key,
          label: key.toUpperCase(),
          options: model[key].map(value => ({key:value, value: value}) ),
          required: true
        }))
      }
    });
  }
}

