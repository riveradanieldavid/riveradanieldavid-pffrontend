import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// THIS TO RUN HomeModule
import { HttpClientModule } from '@angular/common/http';
// NEW MODULES MUST BE DECLARED HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// THIS TO RUN HomeModule
import { HomeModule } from './components/home/home.module';

import { LoginComponent } from './components/login/login.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

// import { GeneralModule } from './components/general/general.module'; // IMPORTING MODULE CAUSES RELOAD OF PAGE. BUT RUN
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    // FooterComponent,

  ],
  // NEW MODULES MUST BE DECLARED HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // GeneralModule, // IMPORTING MODULE CAUSES RELOAD OF PAGE. BUT RUN
    // THIS TO RUN HomeModule
    HomeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
