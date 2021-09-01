import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/service/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})

export class CharactersListComponent implements OnInit 
{
  characters: Character[]=[];
  private pageNum=1;
  private query:string;
  private hideScrollHeight=200;
  private showScrollHeight=500;
  
  constructor(
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router

    ) { 
      //this.onUrlChanges();
      //this.getDataFromService();
     // this.getCharactersByQuerySearch();
    }

  ngOnInit(): void {
  //  this.getDataFromServiceAll();
 // this.getDataFromService();
    this.getCharactersByQuerySearch();
 
  }

 

  getCharactersByQuerySearch(): void{
    this.route.queryParams.subscribe(( params:ParamMap )=>{
      console.log('Params->', params);
     // this.query = params['q'];
      this.query = params['categoryProduct'];
      this.getDataFromService();  
      
    });
  }

  private getDataFromService():void
  {
    this.characterSvc
    .searchCharacters(this.query,this.pageNum)
    .subscribe((res:any)=>{
      console.log(res);
     // this.characters.forEach(element => {
     //    console.log(element); })
     this.characters=res;
      })
  }

  
}
