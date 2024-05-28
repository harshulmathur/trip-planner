import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {firebaseConfig} from './enviroments/enviroments';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
