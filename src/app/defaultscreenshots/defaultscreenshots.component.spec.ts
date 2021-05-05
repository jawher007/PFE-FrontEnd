import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultscreenshotsComponent } from './defaultscreenshots.component';

describe('DefaultscreenshotsComponent', () => {
  let component: DefaultscreenshotsComponent;
  let fixture: ComponentFixture<DefaultscreenshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultscreenshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultscreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
