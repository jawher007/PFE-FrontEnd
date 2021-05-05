import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLoginRegisterComponent } from './navbar-login-register.component';

describe('NavbarLoginRegisterComponent', () => {
  let component: NavbarLoginRegisterComponent;
  let fixture: ComponentFixture<NavbarLoginRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLoginRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
