import { DashboardService } from './../dashboard.service';
import { SessionVideo } from './../sessionvideo';
import { TestvideoService } from './../testvideo.service';
import { TestVideo } from './../testvideo';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-viewtestvideo',
  templateUrl: './viewtestvideo.component.html',
  styleUrls: ['./viewtestvideo.component.scss']
})
export class ViewtestvideoComponent implements OnInit {
sessionvideo:SessionVideo;
testvideo:TestVideo;
idsessiontest:number;
testrank:string;
sessionidtest:string
sessionid: string;
idsession:number;
  constructor(private testvideoService:TestvideoService,private dashboardService: DashboardService) { }

  ngOnInit() {
    this.testrank = sessionStorage.getItem('testrank');
    this.sessionidtest = sessionStorage.getItem('sessionidtest');
    this.sessionid = sessionStorage.getItem('sessionid');
    this.idsession = +this.sessionid;
    this.idsessiontest = +this.sessionidtest;
    this.show();
    this. getBySession();

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
  }


  getBySession() {
    this.dashboardService.getSessionVideo(this.idsession)
      .subscribe(data => {

        this.sessionvideo = data;
      //  this.ngOnInit();

      }, error => console.log(error));



  }

  show(){
    this.testvideoService.getTestbySession(this.idsessiontest, this.testrank)
      .subscribe(data => {

        this.testvideo = data;
   

      }, error => console.log(error));


  }


}
