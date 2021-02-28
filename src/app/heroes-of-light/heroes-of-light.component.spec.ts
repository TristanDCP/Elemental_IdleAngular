import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesOfLightComponent } from './heroes-of-light.component';

describe('HeroesOfLightComponent', () => {
  let component: HeroesOfLightComponent;
  let fixture: ComponentFixture<HeroesOfLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesOfLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesOfLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
