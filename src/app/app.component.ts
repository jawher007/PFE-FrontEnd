import { Component,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import  io from 'socket.io-client' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  socket=io('http://localhost:8000/');


  ngOnInit() {
    this.socket.on('connect',function(){ /// if socket connected == true then HitApi 
      console.log('socket connected');
      
    })

    this.socket.on('event2', data => {

      Swal.fire({
        toast: true,
       position: "bottom-end",
        icon: "success",
        title: data.msg,
        timerProgressBar: true,
        showConfirmButton: false,
      //  timer: 4000,
        onOpen: toast => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        }
      });
    });

  }
}
