import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Exercise1Component } from './day2-exercise1.component';

describe('Day2Exercise1Component', () => {
  let component: Day2Exercise1Component;
  let fixture: ComponentFixture<Day2Exercise1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Exercise1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Exercise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
