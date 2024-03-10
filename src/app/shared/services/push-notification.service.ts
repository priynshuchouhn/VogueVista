import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { API } from '../API/API';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  async addSub(body: any) {
    try {
      const res = this.http.post(API.ADD_PUSH_NOTIFICATION_SUBSCRIPTION, body)
      const data = await lastValueFrom(res);
      return data;
    } catch (error: any) {
      console.log(error);
      const err = this.sharedService.handleError(error);
      return null;
    }
  }

  constructor(private http: HttpClient, private sharedService: SharedService) { }
}
