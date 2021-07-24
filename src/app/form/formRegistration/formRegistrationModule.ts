import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FormRegistrationComponent } from "./formRegistration.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: FormRegistrationComponent},
]

@NgModule({
  declarations: [
    FormRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class FormRegistrationModule {

}
