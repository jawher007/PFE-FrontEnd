import { SessionService } from './../session.service';
import { TestsessionService } from './../testsession.service';
import { Component, OnInit } from '@angular/core';
import { Session } from './../session';
import { Testsession } from './../testsession';


@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.scss']
})
export class ViewtestComponent implements OnInit {

  session:Session;
  testsession: Testsession;

  sessionid: string;
  testrank: string;
  sessionidtest:string;

  idsession: number;
  idsessiontest:number;

  constructor(private SessionService: SessionService, private testsessionservice: TestsessionService) { }

  ngOnInit() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
    
    this.sessionidtest = sessionStorage.getItem('sessionidtest');
    this.sessionid = sessionStorage.getItem('sessionid');
    this.testrank = sessionStorage.getItem('testrank');

    this.idsession = +this.sessionid;
    this.idsessiontest = +this.sessionidtest;

    this.getBySession();
    this.geTestSession();
  }


  getBySession() {
    this.SessionService.getSession(this.idsession)
      .subscribe(data => {

        this.session = data;
      //  this.ngOnInit();

      }, error => console.log(error));



  }


  geTestSession() {
    this.testsessionservice.getTestbySession(this.idsessiontest, this.testrank)
      .subscribe(data => {

        this.testsession = data;
     //   this.ngOnInit();

      }, error => console.log(error));



  }

}
