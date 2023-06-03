import { Component, OnInit } from '@angular/core';
import { IDataUser } from 'src/app/interfaces/userInterface';
import { ApipokemonService } from 'src/app/services/apipokemon.service';

@Component({
  selector: 'app-tabla-apipokemon',
  templateUrl: './tabla-apipokemon.component.html',
  styleUrls: ['./tabla-apipokemon.component.css']
})
export class TablaApipokemonComponent implements OnInit{
  listUser: IDataUser[] = [];
  constructor(private apiPokemonService: ApipokemonService) {
  
  }

  ngOnInit(): void {
    //console.log('Hola desde el ngOnInit');
    this.apiPokemonService.getAllUser().subscribe(
      (data) => { //arrow function
        console.log(data);
        this.listUser = data.results;
      }, (error) => {
        console.log(error);
      }
    );
  }

}
