import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../heroes-list';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-of-light.component.html',
  styleUrls: ['./heroes-of-light.component.css']
})
export class HeroesOfLightComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
hero : Hero = {
  id: 1,
  name: 'Water Mage',
  element : 'Water'
}



  constructor() { }

  ngOnInit(): void {
  }

}

