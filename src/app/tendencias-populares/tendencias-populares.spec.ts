import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciasPopulares } from './tendencias-populares';

describe('TendenciasPopulares', () => {
  let component: TendenciasPopulares;
  let fixture: ComponentFixture<TendenciasPopulares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TendenciasPopulares],
    }).compileComponents();

    fixture = TestBed.createComponent(TendenciasPopulares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
