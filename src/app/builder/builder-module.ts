import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RouterModule, Routes } from "@angular/router";
import { GuardGuard } from "../shared/guard/guard.guard";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PortalMenuComponent } from './portalmenu/portalMenu.component';
import { PortalComponent } from "./portals/portal.component";
import { SelectTemplateComponent} from "./template/select-template/select-template.component";
import { TextareaTemplateComponent } from "./template/textarea-template/textarea-template.component";
import { CheckboxTemplateComponent } from "./template/checkbox-template/checkbox-template.component";
import { ButtonTemplateComponent } from "./template/button-template/button-template.component";
import { InputTemplateComponent } from "./template/input-template/input-template.component";

const routes: Routes = [
  { path: '', component: PortalComponent, canActivate: [GuardGuard] },
]

@NgModule({
  declarations: [
    PortalMenuComponent,
    PortalComponent,
    SelectTemplateComponent,
    TextareaTemplateComponent,
    CheckboxTemplateComponent,
    ButtonTemplateComponent,
    InputTemplateComponent
  ],
  imports: [
    PortalModule,
    DragDropModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PortalModule,
    DragDropModule,
    RouterModule,
  ],
})

export class BuilderModule {

}
