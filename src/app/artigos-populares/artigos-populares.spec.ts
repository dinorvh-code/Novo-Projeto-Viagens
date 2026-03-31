import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosPopulares } from './artigos-populares';

describe('ArtigosPopulares', () => {
  let component: ArtigosPopulares;
  let fixture: ComponentFixture<ArtigosPopulares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigosPopulares],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtigosPopulares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
