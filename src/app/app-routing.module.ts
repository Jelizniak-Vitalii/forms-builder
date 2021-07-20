import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitleComponent } from './title/title.component';
import { GuardGuard } from './shared/guard.guard';

const routes: Routes = [
  { path: '', component: TitleComponent },
  { path: 'formLogIn', loadChildren: () => import('./form/formLogIn/form-login-module').then(m => m.FormLogInModule) },
  { path: 'formRegistration', loadChildren: () => import('./form/formRegistration/form-registration-module').then(m => m.FormRegistrationModule) },
  { path: 'portal', loadChildren: () => import('./builder/builder-module').then(m => m.BuilderModule), canActivate: [GuardGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
