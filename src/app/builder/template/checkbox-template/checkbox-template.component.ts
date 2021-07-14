import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-checkbox-template',
  templateUrl: './checkbox-template.component.html',
  styleUrls: ['./checkbox-template.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxTemplateComponent),
    multi: true
  }]
})
export class CheckboxTemplateComponent implements OnInit, ControlValueAccessor {


  constructor() { }


  value: boolean
  onChange = (value: any) => {};

  writeValue(obj: any) {

    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
  }



  ngOnInit(): void {

  }


}
