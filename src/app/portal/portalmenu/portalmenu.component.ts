import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portalmenu',
  templateUrl: './portalmenu.component.html',
  styleUrls: ['./portalmenu.component.scss']
})
export class PortalmenuComponent implements OnInit {

  constructor() { }

  @Output() inputWidth: EventEmitter<any> = new EventEmitter();
  @Output() inputHeight: EventEmitter<any> = new EventEmitter();
  @Output() inputBorderWidth: EventEmitter<any> = new EventEmitter();
  @Output() inputBorderStyle: EventEmitter<any> = new EventEmitter();
  @Output() inputFontSize: EventEmitter<any> = new EventEmitter();
  @Output() inputColor: EventEmitter<any> = new EventEmitter();
  @Output() inputFontWeight: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

  
  }
  changeWidth(event: Event){
      this.inputWidth.emit(event.target)
  }
  changeHeight(event: Event){
    this.inputHeight.emit(event.target)
  }
  changeBorderWidth(event: Event){
    this.inputBorderWidth.emit(event.target)
  }
  changeBorderStyle(event: Event){
    this.inputBorderStyle.emit(event.target)
  }
  changeFontSize(event: Event){
    this.inputFontSize.emit(event.target)
  }
  changeColor(event: Event){
    this.inputColor.emit(event.target)
  }
  changeFontWeight(event: Event){
    this.inputFontWeight.emit(event.target)
  }


}
