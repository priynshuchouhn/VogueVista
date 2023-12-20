import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  changePasswordForm!: FormGroup
  isSubmitted: Boolean = false

  constructor(){
    this.changePasswordForm = new FormGroup({
      oldPassword : new FormControl(null, Validators.required),
      newPassword: new FormControl(null, Validators.required),
      confirmNewPassword: new FormControl(null, Validators.required)
    })
  }

  get f(){
    return this.changePasswordForm.controls
  }

  onSubmit(){
    this.isSubmitted= true
    // if(this.changePasswordForm.invalid){
    //   return;
    // }
  }

}
