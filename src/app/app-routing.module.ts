import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitleComponent } from './title/title.component';
import { GuardGuard } from './shared/guard/guard.guard';

const routes: Routes = [
  { path: '', component: TitleComponent },
  { path: 'formLogIn', loadChildren: () => import('./form/formLogIn/formLoginModule').then(m => m.FormLoginModule) },
  { path: 'formRegistration', loadChildren: () => import('./form/formRegistration/formRegistrationModule').then(m => m.FormRegistrationModule) },
  { path: 'portal', loadChildren: () => import('./builder/builder-module').then(m => m.BuilderModule), canActivate: [GuardGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
