import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

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

  constructor() { }
}
