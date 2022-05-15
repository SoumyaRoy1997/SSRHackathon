import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from './common/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeLayoutModule } from './home-layout/home-layout-module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from 'angularfire2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {LoginModule} from './login/login.module';
import { LoginService } from './service/login.service';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    HomeLayoutModule,
    LoginModule,
    AngularFireModule.initializeApp(environment.firebaseconfig, 'flight-app'),
    BrowserAnimationsModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }},
  LoginService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
