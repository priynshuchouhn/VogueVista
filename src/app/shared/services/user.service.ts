import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { API } from '../API/API';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  fromJsonData(data: any): User {
    const tempUser = new User(
      data.id,
      data.username,
      data.email,
      data.mobileNo,
      data.token);
    return tempUser;
  }

  login(body: any){
   return this.http.post(API.LOGIN, body)
  }

  register(body: any){
    this.http.post(API.REGISTER, body).subscribe((res:any)=>{
      if(res['success']==true){
        this.router.navigate(['/']);
      }
    })
  }

  constructor(private http: HttpClient, private router: Router) { }
}
