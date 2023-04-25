import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaExamenComponent } from '../app/components/pantalla-examen/pantalla-examen.component';

const routes: Routes = [ //se define como constante porque la ruta no va a cambiar
  {path: '',redirectTo: 'pantalla-examen', pathMatch: 'full'}, 
  {path: 'pantalla-examen', component: PantallaExamenComponent}
];

@NgModule (
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule { }