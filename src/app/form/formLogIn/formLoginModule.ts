import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { FormLogInComponent } from "./formLogIn.component";

const routes: Routes = [
  { path: '', component: FormLogInComponent },
]

@NgModule({
  declarations: [
    FormLogInComponent,
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

export class FormLoginModule { }
