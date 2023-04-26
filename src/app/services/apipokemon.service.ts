import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../interfaces/pokemonInterface';

const API_GET__ALL_POKEMON = environment.API_GET__ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})
export class ApipokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemon() { 
    return this.http.get<IPokemon>(API_GET__ALL_POKEMON);
  }

}
