import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultscreenshots',
  templateUrl: './defaultscreenshots.component.html',
  styleUrls: ['./defaultscreenshots.component.scss']
})
export class DefaultscreenshotsComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
