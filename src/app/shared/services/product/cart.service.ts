import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { Cart } from '../../model/product/cart.model';
import { ProductService } from './product.service';
import { API } from '../../API/API';
import { lastValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadCartItems } from '../store/cart/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  fromJsonData(data: any) {
    const {
      _id,
      userId,
      productId,
      quantity,
      product } = data

    const sizeVariant = data.sizeVariant ?? null;
    const parsedProduct = this.productService.fromJsonData(data.product);
    const tempCartItem = new Cart(
      _id, userId, productId, quantity, sizeVariant, parsedProduct
    );
    return tempCartItem;
  }

  async loadCartItem(){
    const lstCart = await this.getCartItem() as Cart[];
    if(lstCart){
      this.store.dispatch(loadCartItems({items: lstCart}));
    }
  }


  async addToCart(cartItem: any){
    try {
      const res = this.http.post(API.ADD_TO_CART, cartItem, {
        headers: {
          'Authorization' : `Bearer ${this.sharedService.userData.token}`
        }
      });
      const data = await lastValueFrom(res);
      const cart: Cart = this.fromJsonData((data as any).data)
      return cart;
    } catch (error: any) {
     
      const err = this.sharedService.handleError(error)
      return err;
    }
  }
  async getCartItem(){
    try {
      const lstCart: Cart[] = [];
      if(this.sharedService.userData){
        const res = this.http.get(API.CART_LIST, {
          headers: {
            'Authorization' : `Bearer ${this.sharedService.userData.token}`
          }
        });
        const data = await lastValueFrom(res);
        (data as any).data.forEach((el:any) => {
          const parsedCart = this.fromJsonData(el);
          lstCart.push(parsedCart);
        })
      }
      return lstCart;
    } catch (error: any) {
      const err = this.sharedService.handleError(error)
      console.log(error);
      return null;
    }
  }

  constructor(private http: HttpClient, private sharedService: SharedService, private productService: ProductService, private store: Store) { }
}
