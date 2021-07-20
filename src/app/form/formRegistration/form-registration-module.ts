import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { FormRegistrationComponent } from "./formRegistration.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    FormRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: FormRegistrationComponent},
    ]),
  ],
  exports: [
    RouterModule
  ]
})

export class FormRegistrationModule {

}
