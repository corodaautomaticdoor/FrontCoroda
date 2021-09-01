import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';

import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { from } from 'rxjs';
import { CharacterComponent } from './character.components';

const myComponents= [ 
  CharactersDetailsComponent, 
  CharactersListComponent , 
  CharacterComponent
];

@NgModule({
  declarations: [... myComponents],
  imports: [CommonModule, RouterModule],
  exports:[...myComponents],
})
export class CharactersModule { }

