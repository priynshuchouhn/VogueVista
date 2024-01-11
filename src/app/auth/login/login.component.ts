import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup
  isSubmitted: boolean = false
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router, private cartService: CartService) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'rememberMe': new FormControl(null),
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  async onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const value = this.loginForm.value
    const body = {
      email: value.email,
      password: value.password
    }

    const res = await this.userService.login(body) as any
    if(res['success']== true){
      const user = res['data'];
      if (value['rememberMe'] == true) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        sessionStorage.setItem('user', JSON.stringify(user));
      }
      this.cartService.loadCartItem();
      this.router.navigate(['/']);
    }else{
      this.errorMessage = res;
    }
  }
}

