import { StatisticsComponent } from './../statistics/statistics.component';
import { ViewtestComponent } from './../viewtest/viewtest.component';
import { Test } from './../Test';
import { Session } from './../session';
import { TestsessionService } from './../testsession.service';
import { Testsession } from './../testsession';
import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { notEqual } from 'assert';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';



@Component({
  selector: 'app-screentime',
  templateUrl: './screentime.component.html',
  styleUrls: ['./screentime.component.scss']
})
export class ScreentimeComponent implements OnInit {
  sessionid: string = '';
  id: number;
  testsessions: Testsession[];

  



  constructor(private testsessionservice: TestsessionService, public dialog: MatDialog) { }



  ngOnInit() {

    

    this.sessionid = sessionStorage.getItem('sessionidsessionid');
    this.id = +this.sessionid;
    this.testsessionservice.getTestbyID(this.id)
      .subscribe(data => {
        
        this.testsessions = data;

      }, error => console.log(error));



  }



  viewtest(sessionid: number, testrank: string) {
    sessionStorage.setItem('sessionidtest', sessionid + "");
    sessionStorage.setItem('testrank', testrank);
    const dialogRef = this.dialog.open(ViewtestComponent, {
      autoFocus: false,
      maxHeight: '90vh'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

}
