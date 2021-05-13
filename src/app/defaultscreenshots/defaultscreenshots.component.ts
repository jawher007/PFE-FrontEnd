import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-defaultscreenshots',
  templateUrl: './defaultscreenshots.component.html',
  styleUrls: ['./defaultscreenshots.component.scss']
})
export class DefaultscreenshotsComponent implements OnInit {
 
  sideBarOpen = true;

  constructor() { }

  ngOnInit() {
    
   }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
