import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string = ''
  registerForm: FormGroup
  isSubmitted: boolean = false

  constructor(public userService: UserService, private router: Router){
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      terms_conditions: new FormControl(null,Validators.requiredTrue),
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  async onSubmit(){
    this.isSubmitted = true
    if(this.registerForm.invalid){
      return;
    }
    const value = this.registerForm.value
    const body = {
      name : value.username,
      password: value.password,
      email: value.email,
    }
    const res = await this.userService.register(body) as any
    if (res['success'] == true) {
      this.router.navigate(['/login']);
    }else{
      this.errorMessage = res
    }
  }

}
