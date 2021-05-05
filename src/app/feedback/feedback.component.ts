import { FeedbackService } from './../feedback.service';
import { Feedback } from './../feedback';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from "rxjs";
import Swal from 'sweetalert2/dist/sweetalert2.js';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedback1;
  feedback: Feedback = new Feedback();
  submitted = false;
  disable:string;
  yes:string='able';
  no:string='disable';
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.disable=sessionStorage.getItem('showbutton');
  }

  save() {
   this.feedback.userfeedback=sessionStorage.getItem('username');
   this.feedback.localization=sessionStorage.getItem('sessionid');
    this.feedbackService.createFeedback(this.feedback)
      .subscribe(data => console.log(data), error => console.log(error));
    this.feedback = new Feedback();
    Swal.fire({
      title: 'Success!!',
      text:   'Thank you for your Feedback',
      icon: 'success'
    });
    this.feedback1='';
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
