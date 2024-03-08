import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { WishlistService } from 'src/app/shared/services/product/wishlist.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Auth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, OAuthProvider } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup
  isSubmitted: boolean = false
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router, private cartService: CartService, private wishlistService: WishlistService, private auth: Auth) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'rememberMe': new FormControl(null),
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  signInWithGoogle(){
    signInWithPopup(this.auth, new GoogleAuthProvider()).then(res => {
      const user = res.user;
      const body ={
        displayName : user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        uid: user.uid
      }
      return this.userService.logInWithGoogle(body)
    }).then((res: any) => {
      if(res['success']== true){
        const user = this.userService.fromJsonData(res['data']);
        sessionStorage.setItem('user', JSON.stringify(user));
        this.cartService.loadCartItem();
        this.wishlistService.loadWishlist();
        this.router.navigate(['/']);
      }else{
        this.errorMessage = res;
      }
    })
    .catch(error => {
      console.log(error)
    });

  }
  signInWithFacebook(){
    signInWithPopup(this.auth, new FacebookAuthProvider()).then(res => {
      console.log(res);
      const user = res.user;
      const body ={
        displayName : user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        uid: user.uid
      }
      // return this.userService.logInWithGoogle(body)
    })
    // .then((res: any) => {
    //   if(res['success']== true){
    //     const user = this.userService.fromJsonData(res['data']);
    //     sessionStorage.setItem('user', JSON.stringify(user));
    //     this.cartService.loadCartItem();
    //     this.wishlistService.loadWishlist();
    //     this.router.navigate(['/']);
    //   }else{
    //     this.errorMessage = res;
    //   }
    // })
    .catch(error => {
      console.log(error)
    });
  }

  
  signInWithApple(){
    const provider = new OAuthProvider('apple.com')
    signInWithPopup(this.auth, provider).then(res => {
      console.log(res);
      const user = res.user;
      const body ={
        displayName : user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        uid: user.uid
      }
      // return this.userService.logInWithGoogle(body)
    })
    // .then((res: any) => {
    //   if(res['success']== true){
    //     const user = this.userService.fromJsonData(res['data']);
    //     sessionStorage.setItem('user', JSON.stringify(user));
    //     this.cartService.loadCartItem();
    //     this.wishlistService.loadWishlist();
    //     this.router.navigate(['/']);
    //   }else{
    //     this.errorMessage = res;
    //   }
    // })
    .catch(error => {
      console.log(error)
    });

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
      const user = this.userService.fromJsonData(res['data']);
      if (value['rememberMe'] == true) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        sessionStorage.setItem('user', JSON.stringify(user));
      }
      this.cartService.loadCartItem();
      this.wishlistService.loadWishlist();
      this.router.navigate(['/']);
    }else{
      this.errorMessage = res;
    }
  }
}

