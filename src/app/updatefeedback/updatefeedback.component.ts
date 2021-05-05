import { FeedbackService } from './../feedback.service';
import { Component, OnInit } from '@angular/core';
import {Feedback} from './../feedback';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShowfeedbackComponent } from './../showfeedback/showfeedback.component';
@Component({
  selector: 'app-updatefeedback',
  templateUrl: './updatefeedback.component.html',
  styleUrls: ['./updatefeedback.component.scss']
})
export class UpdatefeedbackComponent implements OnInit {
feedback1;
feedback: Feedback = new Feedback();
feedbackid:number;
submitted = false;
  constructor(private feedbackService: FeedbackService,public dialog: MatDialog) { }

  ngOnInit() {
  
  this.feedbackid=+sessionStorage.getItem('updatefeedback');
  this.feedbackService.getFeedbackById(this.feedbackid)
  .subscribe(data => {
    console.log(data)
    this.feedback = data;
  }, error => console.log(error));
  }

  save() {
  
     this.feedbackService.updatefeedback(this.feedback)
       .subscribe(data => console.log(data), error => console.log(error));
     this.feedback = new Feedback();
     Swal.fire({
       title: 'Success!!',
       text:   'Feedback Updated Successfully',
       icon: 'success'
     });
     this.feedback1='';
     const dialogRef = this.dialog.open(ShowfeedbackComponent, {
      autoFocus: false,
      maxHeight: '90vh'
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
   }
 
   onSubmit() {
     this.submitted = true;
     this.save();    
   }

}
