import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';

@Component(
    {
        selector:'app-character',
        template:` 
        <div class="card">
        <div class="image">
            <a [routerLink]="['/character-details', character.id]">
                <img 
                src="/assets/images/{{character.image}}" 
                class="card-img-top"
                />
            </a>
        </div>

        <div class="card-inner">
            <div class="header">
                <a [routerLink]="['/character-details', character.id]">
                 <h2>{{character.description | slice:0:15}}</h2>
                </a>
                <h4 class="text-muted">{{character.origin}}</h4>
                <h4 class="text-muted">{{character.model}}</h4>
                <h4 class="text-muted">{{character.material}}</h4>
                <h4 class="text-muted">{{character.dimensions}}</h4>
                <h4 class="text-muted">{{character.color}}</h4>
                <small class="text-muted">character.priceUnit</small>
            </div>          
        </div>
    </div>   `, 
    changeDetection:ChangeDetectionStrategy.OnPush
    }
)

export class CharacterComponent{
    @Input()character: Character;
}