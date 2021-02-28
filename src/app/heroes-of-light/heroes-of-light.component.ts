import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-of-light.component.html',
  styleUrls: ['./heroes-of-light.component.css']
})
export class HeroesOfLightComponent implements OnInit {
hero : Hero = {
  id: 1,
  name: 'Water Mage',
  element : 'Water'
}



  constructor() { }

  ngOnInit(): void {
  }

}

