import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateissueComponent } from './updateissue.component';

describe('UpdateissueComponent', () => {
  let component: UpdateissueComponent;
  let fixture: ComponentFixture<UpdateissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
