import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarscreenComponent } from './sidebarscreen.component';

describe('SidebarscreenComponent', () => {
  let component: SidebarscreenComponent;
  let fixture: ComponentFixture<SidebarscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
