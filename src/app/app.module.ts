import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesign } from './material/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PublicComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MaterialDesign
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
