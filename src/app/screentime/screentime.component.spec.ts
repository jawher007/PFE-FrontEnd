import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreentimeComponent } from './screentime.component';

describe('ScreentimeComponent', () => {
  let component: ScreentimeComponent;
  let fixture: ComponentFixture<ScreentimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreentimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreentimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
