import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FormLogInComponent} from "./formLogIn.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    FormLogInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: FormLogInComponent },
    ]),
  ],
  exports: [
    RouterModule
  ]
})

export class FormLogInModule {

}
