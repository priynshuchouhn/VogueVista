import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup
  isSubmitted: boolean = false

  constructor(){
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'rememberMe' : new FormControl(null),
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

  }

}
