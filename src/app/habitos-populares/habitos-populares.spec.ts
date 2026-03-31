import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosPopulares } from './habitos-populares';

describe('HabitosPopulares', () => {
  let component: HabitosPopulares;
  let fixture: ComponentFixture<HabitosPopulares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitosPopulares],
    }).compileComponents();

    fixture = TestBed.createComponent(HabitosPopulares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
