import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormRegistrationComponent } from './form/formRegistration/formRegistration.component';
import { FormLogInComponent} from './form/formLogIn/formLogIn.component';
import { TitleComponent } from './title/title.component';
import { PortalmenuComponent } from './builder/portalmenu/portalmenu.component';
import { PortalComponent } from './builder/portals/portal.component';
import { SelectTemplateComponent } from './builder/template/select-template/select-template.component';
import { TextareaTemplateComponent } from './builder/template/textarea-template/textarea-template.component';
import { CheckboxTemplateComponent } from './builder/template/checkbox-template/checkbox-template.component';
import { ButtonTemplateComponent } from './builder/template/button-template/button-template.component';
import { InputTemplateComponent } from './builder/template/input-template/input-template.component';
import * as fromReducer from './store/index'
import { environment } from '../environments/environment';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormLogInComponent,
    FormRegistrationComponent,
    TitleComponent,
    PortalmenuComponent,
    PortalComponent,
    SelectTemplateComponent,
    TextareaTemplateComponent,
    CheckboxTemplateComponent,
    ButtonTemplateComponent,
    InputTemplateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PortalModule,
    DragDropModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot( { example: fromReducer.reducer } ),
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
