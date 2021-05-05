import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsercapibilitiesComponent } from './browsercapibilities.component';

describe('BrowsercapibilitiesComponent', () => {
  let component: BrowsercapibilitiesComponent;
  let fixture: ComponentFixture<BrowsercapibilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsercapibilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsercapibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
