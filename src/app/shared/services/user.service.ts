import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { API } from '../API/API';
import { Router } from '@angular/router';
import { catchError, lastValueFrom } from 'rxjs';
import { SharedService } from './shared.service';
import { Store } from '@ngrx/store';
import { emptyCart } from './store/cart/cart.actions';
import { emptyWishlist } from './store/wishlist/wishlist.actions';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  fromJsonData(data: any): User {
    const tempUser = new User(
      data._id,
      data.name,
      data.email,
      data.mobileNo,
      data.token);
    return tempUser;
  }

  getUserData() {
    const user = JSON.parse(sessionStorage.getItem('user')!) || JSON.parse(localStorage.getItem('user')!) || null
    this.sharedService.userData = user
  }

  async login(body: any) {
    try {
      const res = this.http.post(API.LOGIN, body);
      const data = await lastValueFrom(res);
      return data;
    } catch (error: any) {
      const err = this.sharedService.handleError(error)
      return err;
    }
  }

  async register(body: any) {
    try {
      const res = this.http.post(API.REGISTER, body);
      const data = await lastValueFrom(res);
      return data;
    } catch (error: any) {
      const err = this.sharedService.handleError(error)
      return err;
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.store.dispatch(emptyCart());
    this.store.dispatch(emptyWishlist());
    this.router.navigate(['/']);
  }

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService, private store: Store) { }
}
