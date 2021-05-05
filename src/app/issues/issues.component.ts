import { Issue } from './../issue';
import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './../feedback.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issuetext;
  issue: Issue = new Issue();
  submitted = false;
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  save() {
    this.issue.tester=sessionStorage.getItem('username');
    this.issue.idtest=sessionStorage.getItem('sessionid');
     this.feedbackService.createIssues(this.issue)
       .subscribe(data => console.log(data), error => console.log(error));
     this.issue = new Issue();
     Swal.fire({
      title: 'Success!!',
      text:   'Thank you for reporting an issue',
      icon: 'success'
    });
    this.issuetext='';
   }
 
   onSubmit() {
     this.submitted = true;
     this.save();    
   }
 

}
