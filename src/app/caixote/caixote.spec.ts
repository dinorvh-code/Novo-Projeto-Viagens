import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caixote } from './caixote';

describe('Caixote', () => {
  let component: Caixote;
  let fixture: ComponentFixture<Caixote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caixote],
    }).compileComponents();

    fixture = TestBed.createComponent(Caixote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
