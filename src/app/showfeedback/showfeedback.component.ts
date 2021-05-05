import { UpdateissueComponent } from './../updateissue/updateissue.component';
import { UpdatefeedbackComponent } from './../updatefeedback/updatefeedback.component';
import { Issue } from './../issue';
import { FeedbackService } from './../feedback.service';
import { Feedback } from './../feedback';
import { Component, OnInit } from '@angular/core';
import { Observable,Subscription } from "rxjs";
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-showfeedback',
  templateUrl: './showfeedback.component.html',
  styleUrls: ['./showfeedback.component.scss']
})
export class ShowfeedbackComponent implements OnInit {
  feedback: Observable<Feedback[]>;
  issue: Observable<Issue[]>;
  user:string;
  constructor(private feedbackService:FeedbackService,private router:Router,public dialog: MatDialog) { }

  ngOnInit() {
    this.user=sessionStorage.getItem('username');
    this.show();
  }

  
  show(){
    this.feedback = this.feedbackService.getFeedback();
    this.issue=this.feedbackService.getIssues();
  }

  deletefeedback(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this  Test!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.feedbackService.deletefeedback(id)
        .subscribe(
          data => {
            this.ngOnInit();
            Swal.fire({
              title: 'Feedback deleted with Success!!',
              text:   JSON.stringify(data.message),
              icon: 'success',
             
            });
     
          },
          error => console.log(error));
         
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Operation Canceled',
        'error'
      )
      }
    })
    this.ngOnInit();
  }

  deleteissue(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this  Test!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.feedbackService.deleteissue(id)
        .subscribe(
          data => {
            this.ngOnInit();
            Swal.fire({
              title: 'Issue deleted with Success!!',
              text:   JSON.stringify(data.message),
              icon: 'success',
             
            });
     
          },
          error => console.log(error));
         
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Operation Canceled',
        'error'
      )
      }
    })
    this.ngOnInit();
  }


  updatefeedback(id:number){
    sessionStorage.setItem('updatefeedback',id+'');
    const dialogRef = this.dialog.open(UpdatefeedbackComponent, {
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  updateissue(id:number){
    sessionStorage.setItem('updateissue',id+'');
    
    const dialogRef = this.dialog.open(UpdateissueComponent, {
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}
