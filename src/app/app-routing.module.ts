import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { FormRegistrationComponent } from './form/formRegistration/formRegistration.component';
import { FormLogInComponent} from './form/formLogIn/formLogIn.component';
import { PortalComponent } from './portal/portal/portal.component';
import { GuardGuard } from './shared/guard.guard';

const routes: Routes = [
  { path: '', component: TitleComponent},
  { path: 'formLogIn', component: FormLogInComponent},
  { path: 'formRegistration', component: FormRegistrationComponent},
  { path: 'portal', component: PortalComponent, canActivate: [GuardGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
