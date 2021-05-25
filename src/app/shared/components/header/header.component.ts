import { PieComponent } from './../../widgets/pie/pie.component';
import { IssuesComponent } from './../../../issues/issues.component';
import { ShowfeedbackComponent } from './../../../showfeedback/showfeedback.component';
import { StatisticsComponent } from './../../../statistics/statistics.component';
import { FeedbackComponent } from './../../../feedback/feedback.component';
import { ProfilComponent } from './../../../profil/profil.component';
import { ContactComponent } from './../../../contact/contact.component';
import { ListofusersComponent } from './../../../listofusers/listofusers.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Option } from "../../../Option.model";
import { ThemeService } from "../../../theme.service";
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import  io from 'socket.io-client' ;
import Swal from 'sweetalert2';
import { TestsessionService } from './../../../testsession.service';
import { TestvideoService } from './../../../testvideo.service';
import { Testsession } from './../../../testsession';
import { TestVideo } from './../../../testvideo';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  testvideo: TestVideo;
  testvideos: TestVideo[] = [];

  testsession: Testsession;
  testsessions: Testsession[] = [];

  passedscreen: number;
  failedscreen: number;

  passedvideo: number;
  failedvideo: number;



  load=false;
  disable:string;
  ifscreen:string;
  username;
  showme:string='DISABLED';
  myControl = new FormControl();
  options_auto: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();
  socket=io('http://localhost:8000/');
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private readonly themeService: ThemeService,private testsessionService: TestsessionService,private router: Router,public dialog: MatDialog,private testvideoService: TestvideoService) {}

  ngOnInit() { 

    this.testvideoService.getTestbyStatus("passed").subscribe(data => {

      this.testvideos = data as TestVideo[];
      console.log(this.testvideos);
      this.passedvideo = this.testvideos.length;
      console.log( this.passedvideo);

      sessionStorage.setItem('passedvideo',this.passedvideo+'') ;

    });




    this.testvideoService.getTestbyStatus("failed").subscribe(data => {

      this.testvideos = data as TestVideo[];
      

 

        this.failedvideo = this.testvideos.length;
        sessionStorage.setItem('failedvideo',this.failedvideo+'') ;
      
    });


    this.testsessionService.getTestbyStatus("passed").subscribe(data => {

      this.testsessions = data as Testsession[];

      console.log( this.testsessions);
      this.passedscreen = this.testsessions.length;
      sessionStorage.setItem('passedscreen',this.passedscreen+'') ;
    });

    this.testsessionService.getTestbyStatus("failed").subscribe(data => {

      this.testsessions = data as Testsession[];

      console.log( this.testsessions);

      this.failedscreen = this.testsessions.length
      sessionStorage.setItem('failedscreen',this.failedscreen+'') ;
    });
   

this.Socket();
    
    this.disable=sessionStorage.getItem('showbutton');
    this.username=sessionStorage.getItem('username');
    this.themeService.setTheme("indigo-pink");

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options_auto.filter(option => option.toLowerCase().includes(filterValue));
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  gotojira(){
    // the url,html tag should be called from here , how ?
    window.open('https://id.atlassian.com/login');
    }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

  onLogout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  gotolistofusers(){
    this.router.navigate(['/listofusers']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ListofusersComponent, {
      width: '1200px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  openDialogContact(): void {
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '600px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  openDialogProfil(): void {
    const dialogRef = this.dialog.open(ProfilComponent, {
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  openDialogFeedback(): void {
    const dialogRef = this.dialog.open(FeedbackComponent, {
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  openDialogPortal() {
    this.router.navigate(['/portal']);
  }

  openDialogshowFeedback(){
    const dialogRef = this.dialog.open(ShowfeedbackComponent, {
      autoFocus: false,
      maxHeight: '90vh'
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  openDialogIssue(){
    const dialogRef = this.dialog.open(IssuesComponent, {
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  openDialogCharts(){
    const dialogRef = this.dialog.open(PieComponent, {
      width: '90%',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  gotodashboard(){









    sessionStorage.removeItem('idtest');
    sessionStorage.removeItem('sessionidsessionid');
    sessionStorage.removeItem('sessionid');
   // this.ngOnInit();
   this.ifscreen=sessionStorage.getItem('ifscreen');
   if(this.ifscreen==='screen'){
    this.router.navigate(['/Screenshots']);
   }
   if(this.ifscreen==='video'){
    this.router.navigate(['/home']);
   }
      }

      Socket(){
        this.socket.on('connect',function(){ /// if socket connected == true then HitApi 
          console.log('socket connected');
          
        }) ; 
    
        this.socket.on('event2', data => {
        this.showme='ENABLED';
        this.load=true;
        });

        this.socket.on('disconnect',()=>{ /// if socket connected == true then HitApi
          console.log('socket disconnected'); 
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate([currentUrl]));
 
        Swal.fire({
          toast: true,
         position: "bottom-end",
          icon: "info",
          title: 'Test finished',
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 4000,
          onOpen: toast => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          }
        });
      }) ; 
      }
  
  
      
}
