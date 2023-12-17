import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup
  isSubmitted: boolean = false

  constructor(){
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

  onSubmit(){
    this.isSubmitted = true
    if(this.registerForm.invalid){
      return;
    }
  }

}
