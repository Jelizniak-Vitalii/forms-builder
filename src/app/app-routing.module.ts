import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { FormRegistrationComponent } from './form/formRegistration/formRegistration.component';
import { FormLogInComponent} from './form/formLogIn/formLogIn.component';
import { PortalComponent } from './portal/portal/portal.component';

const routes: Routes = [
  { path: 'title', component: TitleComponent},
  { path: 'formLogIn', component: FormLogInComponent},
  { path: 'formRegistration', component: FormRegistrationComponent},
  { path: 'portal', component: PortalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
