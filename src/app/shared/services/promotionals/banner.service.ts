import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { API } from '../../API/API';
import { lastValueFrom } from 'rxjs';
import { homePageBanner } from '../../model/promotionals/banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {


  async getHomeBanner(){
    try {
      const res = this.http.get(API.HOME_BANNER);
      const data = await lastValueFrom(res) as any
      return data.data;
    } catch (error: any) {
      this.sharedService.handleError(error)
      return null
    }
  }
  async getHomePromoBanner(){
    try {
      const res = this.http.get(API.HOME_PROMO_BANNER);
      const data = await lastValueFrom(res) as any
      return data.data[0];
    } catch (error: any) {
      this.sharedService.handleError(error)
      return null
    }
  }

  constructor(private http: HttpClient, private sharedService: SharedService) { }
}
