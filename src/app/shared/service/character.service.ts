import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Character } from '../interfaces/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class  CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters( query = '', page = 1){
    //const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;  
    const filter = `${environment.baseUrlAPI}/?category=${query}`;
    //const filter = `${environment.baseUrlAPI}`;
  
    return this.http.get<Character[]>(filter);
  }

  


  getDetails(id:number){
  return this.http.get<Character[]>(`${environment.baseUrlAPI}/${id}`);}
}
