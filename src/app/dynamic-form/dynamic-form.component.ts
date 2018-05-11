import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../control-base';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ControlService]
})

export class DynamicFormComponent implements OnInit {

  @Input() controls: ControlBase<any>[] = [];

  form: FormGroup;
  payLoad = '';

  constructor(private cs: ControlService) { }

  ngOnInit() {
    this.form = this.cs.toFormGroup(this.controls);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
