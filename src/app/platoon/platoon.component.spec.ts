import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoonComponent } from './platoon.component';

describe('PlatoonCComponent', () => {
  let component: PlatoonComponent;
  let fixture: ComponentFixture<PlatoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
