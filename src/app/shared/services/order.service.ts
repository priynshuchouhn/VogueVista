import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { lastValueFrom } from 'rxjs';
import { Order } from '../model/order.model';
import { ProductService } from './product/product.service';
import { Product } from '../model/product/product.model';
import { AddressService } from './user/address.service';
import { API } from '../API/API';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  fromJsonData(data: any) {
    const {
      _id,
      userId,
      orderNumber,
      orderDate,
      shippingAddress,
      totalAmount,
      orderStatus,
      paymentId,
      paymentMethod,
      products,
    } = data;

    const parsedProduct: Product[] = [];
    products.forEach((el: any) => {
      console.log(el);
      const product = this.productService.fromJsonData(el);
      parsedProduct.push(product);
    })
    const parsedAddress = this.addressService.fromJsonData(shippingAddress);

    const discount = data.discount ?? null
    const shippingCharges = data.shippingCharges ?? null

    const tempOrder = new Order(
      _id,
      userId,
      orderNumber,
      orderDate,
      parsedAddress,
      totalAmount,
      orderStatus,
      paymentId,
      paymentMethod,
      parsedProduct,
      discount,
      shippingCharges,
    )

    return tempOrder;
  }

  async getOrders() {
    try {
      const res = this.http.get(API.GET_ORDER, {
        headers: {
          'Authorization': `Bearer ${this.sharedService.userData.token}`
        }
      })
      const data = await lastValueFrom(res);
      const lstOrder: Order[] = [];
      (data as any).data.forEach((order: any) => {
        const parsedOrder = this.fromJsonData(order);
        lstOrder.push(parsedOrder);
      })
      return lstOrder;
    } catch (error: any) {
      console.log(error)
      const err = this.sharedService.handleError(error);
      console.log(err);
      return null;
    }
  }


  async addOrder(order:any){
    try {
      const res = this.http.post(API.Add_ORDER, order,{
        headers: {
          'Authorization': `Bearer ${this.sharedService.userData.token}`
        }
      })
      const data = await lastValueFrom(res);
      const parsedOrder = this.fromJsonData(data);
      return parsedOrder;
    } catch (error:any) {
      const err = this.sharedService.handleError(error);
      console.log(err);
      return null;
    }
  }
  constructor(private http: HttpClient, private sharedService: SharedService, private productService: ProductService, private addressService: AddressService) { }
}
