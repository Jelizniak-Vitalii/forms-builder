import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormRegistrationComponent } from './form/formRegistration/formRegistration.component';
import { FormLogInComponent} from './form/formLogIn/formLogIn.component';
import { TitleComponent } from './title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortalmenuComponent } from './portal/portalmenu/portalmenu.component';
import { PortalComponent } from './portal/portal/portal.component';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NoSanitizePipe } from './util/nosanitizepipe';
import { StyleDirectiveDirective } from './directive/style-directive.directive';
import { InputComponent } from './portal/input/input.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormLogInComponent,
    FormRegistrationComponent,
    TitleComponent,
    PortalmenuComponent,
    PortalComponent,
    NoSanitizePipe,
    StyleDirectiveDirective,
    InputComponent


    

 
    
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


  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
