import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PantallaExamenComponent } from './components/pantalla-examen/pantalla-examen.component';

import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { TablaApipokemonComponent } from './pages/tabla-apipokemon/tabla-apipokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PantallaExamenComponent,
    TablaApipokemonComponent
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
