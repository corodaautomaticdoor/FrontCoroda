import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '@app/shared/service/character.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Character } from '@app/shared/interfaces/character.interface';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  characters$: Observable<Character[]>;
  constructor( private route:ActivatedRoute, private characterSvc:CharacterService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id=params['id'];
      this.characters$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack(): void{
    this.location.back();

  }
}
