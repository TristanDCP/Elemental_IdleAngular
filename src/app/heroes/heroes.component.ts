import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elemental-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  waterMageResource(){
    let progress = 0;
    let waterBar = document.getElementById('waterMageProgressBar');
    if(progress == 0){
      progress = 1;
      let width = 0;
      let baseTime = 5;
      let newIntervalTime = baseTime*10;
      let id = setInterval(() => {
        if(width >= 100){
          clearInterval(id);
          progress = 0;
          // TO DO CHANGE ARIA ATTRIBUTE TO ZERO
          this.waterMageResource();
          console.log(width);
        } else {
          width++;
          waterBar!.style.width = width + "%";
          waterBar!.innerHTML = width + "%";
        }
      }, newIntervalTime);
    }
  }
}
