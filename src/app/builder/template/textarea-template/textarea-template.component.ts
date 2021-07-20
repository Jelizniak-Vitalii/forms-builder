import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-textarea-template',
  templateUrl: './textarea-template.component.html',
  styleUrls: ['./textarea-template.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaTemplateComponent),
    multi: true
  }]
})
export class TextareaTemplateComponent implements OnInit, ControlValueAccessor {
  value: string

  constructor() { }

  ngOnInit(): void {
  }

  onChange = (value: any) => {};

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
  }

}
