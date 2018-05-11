import { Component, OnInit, Input } from '@angular/core';
import { ControlBase } from '../control-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})
export class DynamicFormControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() control: ControlBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }

}