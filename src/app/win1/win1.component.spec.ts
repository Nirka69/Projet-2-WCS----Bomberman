import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Win1Component } from './win1.component';

describe('Win1Component', () => {
  let component: Win1Component;
  let fixture: ComponentFixture<Win1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Win1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Win1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
