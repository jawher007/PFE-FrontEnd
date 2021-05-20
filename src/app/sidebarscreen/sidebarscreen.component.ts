import { TestsessionService } from './../testsession.service';
import { SessionService } from './../session.service';
import { Session } from './../session';
import { Component, OnInit } from '@angular/core';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';
import * as $ from 'jquery';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import  io from 'socket.io-client' ;
@Component({
  selector: 'app-sidebarscreen',
  templateUrl: './sidebarscreen.component.html',
  styleUrls: ['./sidebarscreen.component.scss']
})
export class SidebarscreenComponent implements OnInit {
  load=false;
socket=io('http://localhost:8000/');
  sessions:Session[] = [];
  session:Session;
  indexmat;
  idindex:number;

  constructor(private sessionService:SessionService,private router:Router,private testsession:TestsessionService) { }

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
   
      console.log(this.idindex);
      
      $(document).ready(function() {
     $('mat-card.example-card').eq(+this.idindex).addClass('active');
  });
 

    this.show();
   
    
   
     
  
   
  }

  show(){
    this.sessionService.getSessions().subscribe(data => {

      this.sessions = data as Session[];
      this.sessions.reverse();
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
  
 
   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/Screenshots/screen']));


   

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
        this.sessionService.deleteSession(id)
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
          this.testsession.deleteTest(id)
          .subscribe(
            data => {
             
              this.show();
            },
            error => console.log(error));

            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/Screenshots']));
    
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


