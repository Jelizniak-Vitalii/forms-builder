import { Component, OnInit, Input } from '@angular/core';
import { FormLogInComponent} from '../form/formLogIn/formLogIn.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  condition: boolean = true;

  constructor(
    public formLogInComponent: FormLogInComponent
  ){}

  ngOnInit(): void {
    this.formLogInComponent.data.subscribe((x) =>{
    this.condition = x
    })
}
}