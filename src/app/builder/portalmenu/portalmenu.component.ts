import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleActions } from '../../store/actions';


@Component({
  selector: 'app-portalmenu',
  templateUrl: './portalmenu.component.html',
  styleUrls: ['./portalmenu.component.scss']
})
export class PortalmenuComponent implements OnInit {

  // color: string;
  // width: string;
  // height: string;
  // fontSize: string;

  constructor(private store$: Store) { }

  changeColor(event: any): void{
    this.store$.dispatch(ExampleActions.changeColor({
      color: event.target.value }))
  }
  changeFontSize(event: any): void{
    this.store$.dispatch(ExampleActions.changeFontSize({
      fontSize: event.target.value }))
  }
  changeWidth(event: any): void{
    this.store$.dispatch(ExampleActions.changeWidth({
      width: event.target.value }))
  }
  changeHeight(event: any): void{
    this.store$.dispatch(ExampleActions.changeHeight({
      height: event.target.value }))
  }
  changeBorderColor(event: any): void{
    this.store$.dispatch(ExampleActions.changeBorderColor({
      borderColor: event.target.value }))
  }
  changeBorderRadius(event: any): void{
    this.store$.dispatch(ExampleActions.changeBorderRadius({
      borderRadius: event.target.value}))
    // debugger
  }

  ngOnInit(): void {
  }

}
