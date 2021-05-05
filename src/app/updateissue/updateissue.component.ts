
import { Issue } from './../issue';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FeedbackService } from './../feedback.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShowfeedbackComponent } from './../showfeedback/showfeedback.component';
@Component({
  selector: 'app-updateissue',
  templateUrl: './updateissue.component.html',
  styleUrls: ['./updateissue.component.scss']
})
export class UpdateissueComponent implements OnInit {
  issuetext;
  issue: Issue = new Issue();
  issueid:number;
  submitted = false;
  constructor(private feedbackService: FeedbackService,public dialog: MatDialog) { }

  ngOnInit() {
  this.issueid=+sessionStorage.getItem('updateissue');
  this.feedbackService.getIssueById(this.issueid)
  .subscribe(data => {
    console.log(data)
    this.issue = data;
  }, error => console.log(error));
  }

  save() {
   
    this.feedbackService.updateissue(this.issue)
      .subscribe(data => console.log(data), error => console.log(error));
    this.issue = new Issue();
    Swal.fire({
      title: 'Success!!',
      text:   'Feedback Updated Successfully',
      icon: 'success'
    });
    this.issuetext='';
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
