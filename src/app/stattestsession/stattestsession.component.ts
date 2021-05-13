 import { TestsessionService } from './../testsession.service';
import { SessionService } from './../session.service';
import { Component, OnInit } from '@angular/core';
import{Session} from './../session';
import{Testsession} from './../testsession';

@Component({
  selector: 'app-stattestsession',
  templateUrl: './stattestsession.component.html',
  styleUrls: ['./stattestsession.component.scss']
})
export class StattestsessionComponent implements OnInit {
// Objects ( sessions and tests)
  session:Session;
  sessions:Session[]=[];
  testsession:Testsession;
  testsessions:Testsession[]=[];
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


  constructor(private  sessionService:SessionService,private  testsessionService:TestsessionService) { }

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
  this.sessionService.getSessions().subscribe(data => {
   
    this.sessions = data as Session[];
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
  this.testsessionService.getTests().subscribe(data => {
   
    this.testsessions = data as Testsession[];
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
  this.testsessionService.getTestbyStatus("passed").subscribe(data => {
   
    this.testsessions = data as Testsession[];
    
    
this.passed=this.testsessions.length;
    
  });
  }


  // get all failed
getAllTestFailed(){
  this.testsessionService.getTestbyStatus("failed").subscribe(data => {
   
    this.testsessions = data as Testsession[];
   
      
this.failed=this.testsessions.length
  
  });
  }



}

