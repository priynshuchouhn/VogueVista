import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { API } from '../../API/API';
import { lastValueFrom } from 'rxjs';
import { Wishlist } from '../../model/product/wishlist.model';
import { Store } from '@ngrx/store';
import { loadWishlist } from '../store/wishlist/wishlist.actions';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  fromJsonData(data: any){
    const { _id , userId , productId} = data;
    const tempWishlist = new Wishlist(_id, userId, productId);
    return tempWishlist;
  }

  async loadWishlist(){
    const lstWishlist = await this.getWishlistItems()
    if(lstWishlist){
      this.store.dispatch(loadWishlist({lstWishlist: lstWishlist}));
    }
  }

  async getWishlistItems(){
    try {
      const res = this.http.get(API.GET_WISHLIST, {
        headers: {
          'Authorization' : `Bearer ${this.sharedService.userData.token}`
        }
      });
      const data = await lastValueFrom(res);
      const lstWishlist: Wishlist[] = [];
      (data as any).data.forEach((el:any) => {
        const parsedProduct = this.productService.fromJsonData(el.productId);
        const parsedWishlist = this.fromJsonData(el);
        parsedWishlist.product = parsedProduct
        lstWishlist.push(parsedWishlist);
      });
      return lstWishlist;
    } catch (error: any) {
      console.log(error);
      const err = this.sharedService.handleError(error)
      return null;
    }
  }

  async addWishlistItem(body: any){
    try {
      const res = this.http.post(API.ADD_TO_WISHLIST,body, {
        headers: {
          'Authorization' : `Bearer ${this.sharedService.userData.token}`
        }
      })
      const data = await lastValueFrom(res);
      const wishlist = this.fromJsonData((data as any).data);
      return wishlist;
    } catch (error:any) {
      const err = this.sharedService.handleError(error);
      return null;
    }
  }
  async removeFromWishlist(body: any){
    try {
      const res = this.http.post(API.REMOVE_FROM_WISHLIST,body, {
        headers: {
          'Authorization' : `Bearer ${this.sharedService.userData.token}`
        }
      })
      const data = await lastValueFrom(res);
      return data;
    } catch (error:any) {
      const err = this.sharedService.handleError(error);
      return null;
    }
  }

  constructor(private http: HttpClient, private sharedService: SharedService, private store: Store, private productService: ProductService) { }
}
