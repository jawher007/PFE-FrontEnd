import { UserlistService } from './../userlist.service';
import { Userlist } from './../userlist';
import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable,Subscription } from "rxjs";


@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.scss']
})
export class ListofusersComponent implements AfterViewInit,OnInit   {
  errorMessage:string;
  ELEMENT_DATA:Userlist[]=[];
  displayedColumns: string[] = [ 'userName','email'];
  dataSource= new MatTableDataSource<Userlist>(this.ELEMENT_DATA);


  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private userlistservice:UserlistService) {
    
  }
  ngOnInit(){
    this.show();
     }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //this.show();
  }
  show(){
    this.userlistservice.getUserList().subscribe( report =>{
      this.dataSource.data=report as Userlist[]
      console.log(report);
    },error=>this.errorMessage=<any>error);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


