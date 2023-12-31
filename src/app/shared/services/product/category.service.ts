import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { API } from '../../API/API';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  async getAllCategory(){
    try {
      const res = this.http.get(API.CATEGORY_LIST)
      const data = await lastValueFrom(res)
      return (data as any).data;
    } catch (error: any) {
      this.sharedService.handleError(error)
      return null
    }
  }

  constructor(private http: HttpClient, private sharedService: SharedService) { }
}
