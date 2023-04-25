import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PantallaExamenComponent } from './components/pantalla-examen/pantalla-examen.component';

import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PantallaExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
