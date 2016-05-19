import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service'


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/css/heroes.component.css'],
    directives: [HeroDetailComponent],

})

export class HeroesComponent implements OnInit{
    title = "Tour of Heroes";
    selectedHero: Hero;
    onSelect(hero: Hero) {this.selectedHero = hero;}

    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit(){
        this.getHeroes();
    }

    getHeroes(){
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}

