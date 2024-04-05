import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { lastValueFrom } from 'rxjs';
import { API } from '../API/API';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  async checkServerWorking(){
    try {
      const res = this.http.get(API.CHECK_SERVER);
      const data = await lastValueFrom(res);
      return data;
    } catch (error) {
      return null;
    }
  }
  constructor(private http: HttpClient, private sharedService: SharedService) { }
}
