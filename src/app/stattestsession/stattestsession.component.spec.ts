import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StattestsessionComponent } from './stattestsession.component';

describe('StattestsessionComponent', () => {
  let component: StattestsessionComponent;
  let fixture: ComponentFixture<StattestsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StattestsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StattestsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
