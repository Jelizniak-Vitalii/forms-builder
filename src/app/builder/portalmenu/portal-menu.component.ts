import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ExampleActions } from 'src/app/store/actions';

export type types =
  'color' |
  'fontSize' |
  'width' |
  'height' |
  'borderColor' |
  'borderRadius';

@Component({
  selector: 'app-portal-menu',
  templateUrl: './portal-menu.component.html',
  styleUrls: ['./portal-menu.component.scss']
})

export class PortalMenuComponent implements OnInit {

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  changeStyle(event: any, type: types){
    this.store$.dispatch(ExampleActions.changeStyle({
      event: event.target.value,
      types: type
    }))
  }

}
