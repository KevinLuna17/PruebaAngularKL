import { Component, OnInit } from '@angular/core';
import { ApipokemonService } from 'src/app/services/apipokemon.service';

@Component({
  selector: 'app-tabla-apipokemon',
  templateUrl: './tabla-apipokemon.component.html',
  styleUrls: ['./tabla-apipokemon.component.css']
})
export class TablaApipokemonComponent implements OnInit{
  
  constructor(private apiPokemonService: ApipokemonService) {
  
  }
  ngOnInit(): void {
    console.log("Probando mi OnInit");
    
  }

}
