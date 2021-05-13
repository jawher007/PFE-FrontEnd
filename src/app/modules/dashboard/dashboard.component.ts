import { ViewtestvideoComponent } from './../../viewtestvideo/viewtestvideo.component';
import { TestvideoService } from './../../testvideo.service';
import { TestVideo } from './../../testvideo';
import { SessionVideo } from './../../sessionvideo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './../../dashboard.service';
import { MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements OnInit {
  
  testvideo:TestVideo[]=[];
  sessionvideo:SessionVideo;

  sessionid:string;
  id:number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService, private router: Router,private testvideoService: TestvideoService, public dialoge: MatDialog) { }

 
  ngOnInit() {
   

   
this.sessionsshow();
this.testshow();
    }

  sessionsshow() {
    this.sessionid = sessionStorage.getItem('sessionid');
    this.id = +this.sessionid;
    this.dashboardService.getSessionVideo(this.id)
      .subscribe(data => {
      
        this.sessionvideo = data;
   
      }, error => console.log(error));

  }

  testshow(){
    this.sessionid = sessionStorage.getItem('sessionidsessionid');
    this.id = +this.sessionid;
    this.testvideoService.getTestbyID(this.id)
      .subscribe(data => {
        
        this.testvideo = data;

      }, error => console.log(error));

  }

  viewtest(sessionid: number, testrank: string) {
    sessionStorage.setItem('sessionidtest', sessionid + "");
    sessionStorage.setItem('testrank', testrank);
    const dialogRef = this.dialoge.open(ViewtestvideoComponent, {
      autoFocus: false,
      maxHeight: '90vh'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

  }

