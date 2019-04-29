import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Win2Component } from './win2.component';

describe('Win2Component', () => {
  let component: Win2Component;
  let fixture: ComponentFixture<Win2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Win2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Win2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
