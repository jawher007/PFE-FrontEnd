import { TestvideoService } from './../../../testvideo.service';
import { SessionVideo } from './../../../sessionvideo';
import { DatasharingService } from './../../../datasharing.service';
import { DashboardService } from './../../../dashboard.service';
import { Test } from './../../../Test';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';
import  io from 'socket.io-client' ;

import Swal from 'sweetalert2/dist/sweetalert2.js';
import * as $ from 'jquery';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  load=false;
socket=io('http://localhost:8000/');
tests:SessionVideo[] = [];
indexmat:string;
idindex:number;
test:SessionVideo;
  constructor(private dashboardService: DashboardService,private router: Router,private datasharingservice:DatasharingService,private testvideoService:TestvideoService) { }

  ngOnInit() {

    // SOCKET 

    this.socket.on('connect',function(){ /// if socket connected == true then HitApi 
      console.log('socket connected');
      
    })

    this.socket.on('event2', data => {

      this.load=true;
    });


    // END SOCKET

    sessionStorage.setItem('showbutton',"able");
    this.indexmat=sessionStorage.getItem('indexof');
    this.idindex=+this.indexmat;
    $(document).ready(function() {
      $('mat-card.example-card').eq(+this.idindex).addClass('active');
   });
    this.show();
  
  
   } 
    show(){
      this.dashboardService.getVideoSessions().subscribe(data => {
      
        this.tests = data as SessionVideo[];
        this.tests.reverse();
        $(document).ready(function() {
          this.indexmat=sessionStorage.getItem('indexof');
          this.idindex=+this.indexmat;
       
          $('mat-card.example-card').eq(+this.idindex).addClass('active');
       });
      
      });
       
      $(document).ready(function() {
        this.indexmat=sessionStorage.getItem('indexof');
        this.idindex=+this.indexmat;
     
        $('mat-card.example-card').eq(+this.idindex).addClass('active');
     });
    
   }

   newMessage(id:number,sessionid:number,clicked_id){
    sessionStorage.setItem('indexof',clicked_id);
    sessionStorage.setItem('sessionid',id+"");
    sessionStorage.setItem('sessionidsessionid',sessionid+"");
    this.dashboardService.getSessionVideo(id)
    .subscribe(data => {

      this.test = data;
     
    }, error => console.log(error));
  
 
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/home/VideoTest']));

   
   }

   deleteTest(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this  Test!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
       
            //session
        this.dashboardService.deleteSessionVideo(id)
        .subscribe(
          data => {
            Swal.fire({
              title: 'Test deleted with Success!!',
              text:   JSON.stringify(data.message),
              icon: 'success',
             
            });
            this.show();
          },
          error => console.log(error));

          this.testvideoService.deleteTestVideo(id)
          .subscribe(
            data => {
             
              this.show();
            },
            error => console.log(error));
          
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/home']));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Operation Canceled',
        'error'
      )
      }
    })
  }



}
