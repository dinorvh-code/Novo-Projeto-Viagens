import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosPopulares } from './destinos-populares';

describe('DestinosPopulares', () => {
  let component: DestinosPopulares;
  let fixture: ComponentFixture<DestinosPopulares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinosPopulares],
    }).compileComponents();

    fixture = TestBed.createComponent(DestinosPopulares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
