import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:21929/api';



  formModel = this.fb.group({
    
    userName: ['', Validators.required],
    email: ['', Validators.email],
    Phonenumber: ['', [ 
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.pattern('^[0-9]*$')
    ]],
    Passwords: this.fb.group({
      password: ['', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
       ]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {     
      userName: this.formModel.value.userName,
      email: this.formModel.value.email,
      phoneNumber:this.formModel.value.Phonenumber,
      password: this.formModel.value.Passwords.password
    };
    return this.http.post(this.BaseURI + '/Authentication/Register', body);
    
  }

  registerAdmin() {
    var body = {
      userName: this.formModel.value.userName,
      email: this.formModel.value.email,
      phoneNumber:this.formModel.value.Phonenumber,
      password: this.formModel.value.Passwords.password
    };
    return this.http.post(this.BaseURI + '/Authentication/RegisterAdmin', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/Authentication/Login', formData);
  }

}
