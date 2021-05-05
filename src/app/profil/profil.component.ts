import { UserlistService } from './../userlist.service';
import { Component, OnInit } from '@angular/core';
import {Userlist} from './../userlist';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  ELEMENT_DATA:Userlist[]=[];
  errorMessage:string ; 
  usernameid : string ;
  constructor(private userlistservice:UserlistService) { }

  ngOnInit() {

    this.show();
  }

  show(){
    this.usernameid=sessionStorage.getItem('username');
    this.userlistservice.getUserByid(this.usernameid).subscribe( report =>{
      this.ELEMENT_DATA=report as Userlist[]
      console.log(report);
    },error=>this.errorMessage=<any>error);
  }

}
