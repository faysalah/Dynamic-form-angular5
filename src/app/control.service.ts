import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ControlBase } from './control-base';
import { TextboxControl } from './textbox-control';
import { DropdownControl } from './dropdown-control';
import { isArray } from 'util';

@Injectable()
export class ControlService{
  constructor() { }

  toFormGroup(controls: ControlBase<any>[] ) {
    let group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                                              : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

  createForm(model){
    let controls= [];
    let fieldsNames = Object.keys(model);
    fieldsNames.forEach(key => {
      if (!isArray(model[key])) {
        controls.push(new TextboxControl({
          key: key,
          label: key.toUpperCase(),
          value: '',
          required: true
        }))
      } else {
        controls.push(new DropdownControl({
          key: key,
          label: key.toUpperCase(),
          options: model[key].map(value => ({key:value, value: value}) ),
          required: true
        }))
      }
    });
    return controls;
  }
}