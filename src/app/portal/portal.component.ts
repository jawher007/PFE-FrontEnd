import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.less']
})
export class PortalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
gotovideo(){
  sessionStorage.setItem('ifscreen','video');
  this.router.navigate(['/home']);
}

gotoscreenshots(){
  sessionStorage.setItem('ifscreen','screen');
  this.router.navigate(['/Screenshots']);
}
}
