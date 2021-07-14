import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectTemplateComponent),
    multi: true
  }]
})
export class SelectTemplateComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  value: string;
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
