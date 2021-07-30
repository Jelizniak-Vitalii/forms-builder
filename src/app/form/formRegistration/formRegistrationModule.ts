import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { FormRegistrationComponent } from "./formRegistration.component";

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
