import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Exercise3Component } from './day2-exercise3.component';

describe('Day2Exercise3Component', () => {
  let component: Day2Exercise3Component;
  let fixture: ComponentFixture<Day2Exercise3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Exercise3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Exercise3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
