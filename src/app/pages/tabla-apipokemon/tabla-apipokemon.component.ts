import { Component, OnInit } from '@angular/core';
import { IDataPokemon } from 'src/app/interfaces/pokemonInterface';
import { ApipokemonService } from 'src/app/services/apipokemon.service';

@Component({
  selector: 'app-tabla-apipokemon',
  templateUrl: './tabla-apipokemon.component.html',
  styleUrls: ['./tabla-apipokemon.component.css']
})
export class TablaApipokemonComponent implements OnInit{
  listPokemon: IDataPokemon[] = [];
  constructor(private apiPokemonService: ApipokemonService) {
  
  }

  ngOnInit(): void {
    console.log('Hola desde el ngOnInit');
    this.apiPokemonService.getAllPokemon().subscribe(
      (data) => { //arrow function
        console.log(data);
        this.listPokemon = data.results;
      }, (error) => {
        console.log(error);
      }
    );
  }

}
