
import { DashboardService } from './../dashboard.service';
import { TestvideoService } from './../testvideo.service';
import { SessionVideo } from './../sessionvideo';
import{TestVideo} from './../testvideo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  session:SessionVideo;
  sessions:SessionVideo[]=[];
  testsession:TestVideo;
  testsessions:TestVideo[]=[];
  // variables to store statistics 
  alltests: number = 0;
  allsessions: number = 0;
  thisyearsession: number = 0;
  thismonthsession: number = 0;
  todaysession: number = 0;
  thisyeartest: number = 0;
  thismonthtest: number = 0;
  todaytest: number = 0;
  passed: number = 0;
  failed: number = 0;


 
  constructor(private dashboardService: DashboardService,private testvideoService: TestvideoService) { }

  ngOnInit() {
    sessionStorage.setItem('showbutton',"disable");
    this.getAllSessions();
    this.getAllTests();
    this.getAllTestPassed()
    this.getAllTestPassed()
    this.getAllTestFailed()
    }
    
    // get all sessions
    getAllSessions(){
      this.dashboardService.getVideoSessions().subscribe(data => {
       
        this.sessions = data as SessionVideo[];
        for (let iter of this.sessions) {
          // all tests
          this.allsessions++;
    
          let systemdate = new Date();
          let dateString = iter.startedAt;
          let newDate = new Date(dateString);
    
    
          let compareyearA = newDate.getFullYear();
          let compareyearB = systemdate.getFullYear();
    
          let comparemonthA = newDate.getMonth()+1;
          let comparemonthB = systemdate.getMonth() + 1;
    
          let comparedayA = newDate.getDate();
          let comparedayB = systemdate.getDate();
    
           // this year
           if (compareyearA == compareyearB) {
            this.thisyearsession++;
          }
          // this month
          if (comparemonthA == comparemonthB && compareyearA == compareyearB ) {
           this.thismonthsession++;
          }
          //today
          if (comparedayA == comparedayB && comparemonthA == comparemonthB && compareyearA == compareyearB) {
            this.todaysession++;
          }
    
        
    }});
    }
    
    // get all tests
    getAllTests(){
      this.testvideoService.getTests().subscribe(data => {
       
        this.testsessions = data as TestVideo[];
        for (let iter of this.testsessions) {
          // all tests
          this.alltests++;
          let systemdate = new Date();
          let dateString = iter.startedAt;
          let newDate = new Date(dateString);
    
    
          let compareyearA = newDate.getFullYear();
          let compareyearB = systemdate.getFullYear();
    
          let comparemonthA = newDate.getMonth()+1;
          let comparemonthB = systemdate.getMonth() + 1;
    
          let comparedayA = newDate.getDate();
          let comparedayB = systemdate.getDate();
    
    
           // this year
           if (compareyearA == compareyearB) {
            this.thisyeartest++;
          }
          // this month
          if (comparemonthA == comparemonthB && compareyearA == compareyearB ) {
           this.thismonthtest++;
          }
          //today
          if (comparedayA == comparedayB && comparemonthA == comparemonthB && compareyearA == compareyearB) {
            this.todaytest++;
          }
        
    
    }});
    }
    
    // get all passed
    getAllTestPassed(){
      this.testvideoService.getTestbyStatus("passed").subscribe(data => {
       
        this.testsessions = data as TestVideo[];
     
    
         console.log( this.passed);
    this.passed=this.testsessions.length;
  
        
      });
      
      }
    
    
      // get all failed
    getAllTestFailed(){
      this.testvideoService.getTestbyStatus("failed").subscribe(data => {
       
        this.testsessions = data as TestVideo[];
        for (let iter of this.testsessions) {
    
          
     console.log(this.failed);
     this.failed=this.testsessions.length;
  
        }
      });
      }
    
    
    
    }
    
    