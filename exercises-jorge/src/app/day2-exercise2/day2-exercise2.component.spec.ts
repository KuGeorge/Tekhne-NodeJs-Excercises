import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Exercise2Component } from './day2-exercise2.component';

describe('Day2Exercise2Component', () => {
  let component: Day2Exercise2Component;
  let fixture: ComponentFixture<Day2Exercise2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Exercise2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Exercise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
