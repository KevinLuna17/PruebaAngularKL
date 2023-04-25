import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PantallaExamenComponent } from './components/pantalla-examen/pantalla-examen.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PantallaExamenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
