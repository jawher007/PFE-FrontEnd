import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestvideoComponent } from './viewtestvideo.component';

describe('ViewtestvideoComponent', () => {
  let component: ViewtestvideoComponent;
  let fixture: ComponentFixture<ViewtestvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtestvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtestvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
