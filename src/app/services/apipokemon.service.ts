import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/userInterface';

const API_GET__ALL_USER = environment.API_GET__ALL_USER;

@Injectable({
  providedIn: 'root'
})
export class ApipokemonService {

  constructor(private http: HttpClient) { }

  getAllUser() { 
    return this.http.get<IUser>(API_GET__ALL_USER);
  }

}
