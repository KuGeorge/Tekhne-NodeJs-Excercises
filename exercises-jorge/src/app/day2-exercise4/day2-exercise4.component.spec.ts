import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Exercise4Component } from './day2-exercise4.component';

describe('Day2Exercise4Component', () => {
  let component: Day2Exercise4Component;
  let fixture: ComponentFixture<Day2Exercise4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Exercise4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Exercise4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
