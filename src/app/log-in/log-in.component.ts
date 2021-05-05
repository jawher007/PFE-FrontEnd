import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm ,Validators,FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  
  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required,Validators.minLength(8)])
   });
  playerName :string ; 
  hide = true;
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.form.reset();
    if (sessionStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('username',this.playerName);
        Swal.fire({
          title: 'Success!!',
          text:   JSON.stringify(res.message),
          icon: 'success'
        });
        this.router.navigateByUrl('/portal');
      },
      err => {
        Swal.fire({
          title: 'Failed!!',
          text:   JSON.stringify(err.error.message),
          icon: 'error'
        });
        this.form.reset();
      }
    );
  }

}
