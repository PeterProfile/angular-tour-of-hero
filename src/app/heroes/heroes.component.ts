import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
  
import { HeroSerivce } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  //heroes = HEROES;
  selectedHero: Hero;
  
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroSerivce) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  clear(){
    this.selectedHero = null;
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
}