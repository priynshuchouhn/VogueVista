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



  private homePageBanner = [  
    { bannerId: '8', bannerImage: 'image8.jpg', bannerTypeId: 1, bannerSmallText: 'Beauty Bonanza', bannerHeading: 'Glow Up with Our Beauty Products', bannerSubheading: 'Top Brands at Affordable Prices' },
    { bannerId: '6', bannerImage: 'image6.jpg', bannerTypeId: 1, bannerSmallText: 'Tech Deals', bannerHeading: 'Upgrade Your Gadgets', bannerSubheading: 'Latest Electronics at Discounted Prices' },
    { bannerId: '7', bannerImage: 'image7.jpg', bannerTypeId: 1, bannerSmallText: 'Home Essentials', bannerHeading: 'Revamp Your Space', bannerSubheading: 'Quality Home Decor and Furniture Deals' },
    { bannerId: '9', bannerImage: 'image9.jpg', bannerTypeId: 1, bannerSmallText: 'Sports & Fitness', bannerHeading: 'Gear Up for Greatness', bannerSubheading: 'High-Quality Fitness Equipment and Apparel' },
    { bannerId: '10', bannerImage: 'image10.jpg',bannerTypeId:1, bannerSmallText: 'Kids Corner', bannerHeading: 'Adorable Outfits for Little Ones', bannerSubheading: 'Fashionable and Comfortable Kids Wear' }
  ]

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

  constructor(private http: HttpClient, private sharedService: SharedService) { }
}
