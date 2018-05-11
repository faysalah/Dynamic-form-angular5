import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ControlBase } from './control-base';
import { TextboxControl } from './textbox-control';
import { DropdownControl } from './dropdown-control';
import { isArray } from 'util';
import { moveEmbeddedView } from '@angular/core/src/view';

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
          value: model[key],
          required: true
        }))
      } else {
        let options = [];
        options.push('Select Option');
        options = model[key].concat(options);
        controls.push(new DropdownControl({
          key: key,
          label: key.toUpperCase(),
          options: options.map(value => ({key:value, value: value}) )
        }))
      }
    });
    return controls;
  }
}