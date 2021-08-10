import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ExampleActions } from 'src/app/store/actions';

@Component({
  selector: 'app-portal-menu',
  templateUrl: './portalMenu.component.html',
  styleUrls: ['./portalMenu.component.scss']
})

export class PortalMenuComponent implements OnInit {

  typeInput: { type: string, placeholder: string}[] = [
    { type: 'color', placeholder: 'Color' },
    { type: 'fontSize', placeholder: 'Font Size' },
    { type: 'width', placeholder: 'Width' },
    { type: 'height', placeholder: 'Height' },
    { type: 'borderColor', placeholder: 'Border Color' },
    { type: 'borderRadius', placeholder: 'Border Radius' },
  ]

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  changeStyle(event: any, type: string): void {
    this.store.dispatch(ExampleActions.changeStyle({
      event: event.target.value,
      types: type
    }))

  }
}
