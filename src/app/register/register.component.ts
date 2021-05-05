import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selectedRole:string;
  message:string; 
  hide = true;
  formselectedRole = new FormGroup({
    selectedRole: new FormControl('', Validators.required)
   });
  
  

  constructor(public service: UserService, private toastr: ToastrService,private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
   this.service.formModel.reset();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open("password needs to contain at least one Symbol and one Uppercase with minimum of eight caracters", action, {
      duration: 5000,
    });
  }
 
  onSubmit() {

    if (this.selectedRole=="User"){
    this.service.register().subscribe((res: any) => { 
   

    //sweetalert
    Swal.fire({
      title: 'Success!!',
      text:   JSON.stringify(res.message),
      icon: 'success'
    });
    this.service.formModel.reset();
    this.router.navigateByUrl("/login");
  
  
    },
      err => {
        Swal.fire({
          title: 'Failed!!',
          text:   JSON.stringify(err.error.message),
          icon: 'error'
        });
        this.service.formModel.reset();
      }
    );
  }
  
    if (this.selectedRole=="Admin"){
      this.service.registerAdmin().subscribe(
        (res: any) => {
           //swaltext
    Swal.fire({
      title: 'Success!!',
      text:   JSON.stringify(res.message),
      icon: 'success'
    });
    this.service.formModel.reset();
    this.router.navigateByUrl("/login");
  
  
    },
      err => {
        Swal.fire({
          title: 'Failed!!',
          text:   JSON.stringify(err.error.message),
          icon: 'error'
        });
        this.service.formModel.reset();
        this.formselectedRole.reset();
      }
    );
    }


  }

}
