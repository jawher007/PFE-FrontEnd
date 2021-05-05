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






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  disable:string;
  ifscreen:string;
  username;
  myControl = new FormControl();
  options_auto: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private readonly themeService: ThemeService,private router: Router,public dialog: MatDialog) {}

  ngOnInit() { 
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
      width: '1200px',
      
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
  
  
      
}
