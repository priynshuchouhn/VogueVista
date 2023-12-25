import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { API } from '../API/API';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  fromJsonData(data: any): User {
    const tempUser = new User(
      data.id,
      data.name,
      data.email,
      data.mobileNo,
      data.token);
    return tempUser;
  }

  login(body: any){
   return this.http.post(API.LOGIN, body).pipe(catchError(this.sharedService.handleError))
  }

  register(body: any){
   return this.http.post(API.REGISTER, body).pipe(catchError(this.sharedService.handleError))
  }

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) { }
}
