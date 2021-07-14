import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleActions } from '../../store/actions';


@Component({
  selector: 'app-portalmenu',
  templateUrl: './portalmenu.component.html',
  styleUrls: ['./portalmenu.component.scss']
})
export class PortalmenuComponent implements OnInit {


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
  }

  ngOnInit(): void {
  }

}
