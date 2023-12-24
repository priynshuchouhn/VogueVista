import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup
  isSubmitted: boolean = false

  constructor(private userService:UserService, private router: Router){
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
    const value = this.loginForm.value
    const body = {
      email: value.email,
      password: value.password
    }
    this.userService.login(body).subscribe((res:any)=>{
      if(res['success']==true){
        this.router.navigate(['/']);
      }
     })
  }

}
