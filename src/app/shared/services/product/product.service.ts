import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { Product } from '../../model/product.model';
import { API } from '../../API/API';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  fromJsonData(data: any): Product {
    const {
      _id,
      name,
      description,
      price,
      stockQuantity,
      categoryId,
      sellerName,
      images,
      category,
      size,
      shippingPolicy,
      otherDetail,
      returnRefundPolicy,
      disclaimer
    } = data;

    const productCategory = category ?? null;
    const productSize = size ?? null;
    const productShippingPolicy = shippingPolicy ?? null;
    const productOtherDetail = otherDetail ?? null;
    const productReturnRefundPolicy = returnRefundPolicy ?? null;
    const productDisclaimer = disclaimer ?? null;

    let tempProduct = new Product(
      _id,
      name,
      description,
      price,
      stockQuantity,
      categoryId,
      sellerName,
      images,
      productCategory,
      productSize,
      productShippingPolicy,
      productOtherDetail,
      productReturnRefundPolicy,
      productDisclaimer,
    );
    return tempProduct;
  }

  async getProductList() {
    try {
      const res = this.http.get(API.PRODUCT_LIST);
      const data = await lastValueFrom(res);
      const lstProduct: Product[] = [];
      (data as any).data.forEach((el:any) => {
        const parsedProduct = this.fromJsonData(el);
        lstProduct.push(parsedProduct);
      });
      return lstProduct;
    } catch (error: any) {
      const err = this.sharedService.handleError(error);
      return err
    }
  }
  async getProductByCategory(categoryName: string) {
    try {
      const body = {name: categoryName}
      const res = this.http.post(API.PRODUCT_LIST_BY_CATEGORY, body);
      const data = await lastValueFrom(res);
      const lstProduct: Product[] = [];
      (data as any).data.forEach((el:any) => {
        const parsedProduct = this.fromJsonData(el);
        lstProduct.push(parsedProduct);
      });
      return lstProduct;
    } catch (error: any) {
      const err = this.sharedService.handleError(error);
      return err
    }
  }
  async getProductDetail(id: string) {
    try {
      const body = {productId: id }
      const res = this.http.post(API.PRODUCT_DETAIL,body);
      const data = await lastValueFrom(res);
      let lstSimilarProduct: Product[] = [];
      (data as any).data['similarProducts'].forEach((el:any) => {
        const parsedProduct = this.fromJsonData(el);
        lstSimilarProduct.push(parsedProduct);
      });
      let product =  this.fromJsonData( (data as any).data['product']);
      return {product: product, similarProducts: lstSimilarProduct};
    } catch (error: any) {
      const err = this.sharedService.handleError(error);
      return err
    }
  }
  async getTrendingArrivals() {
    try {
      const res = this.http.get(API.TRENDING_ARRIVALS);
      const data = await lastValueFrom(res);
      const lstProduct: Product[] = [];
      (data as any).data.forEach((el:any) => {
        const parsedProduct = this.fromJsonData(el);
        lstProduct.push(parsedProduct);
      });
      return lstProduct;
    } catch (error: any) {
      const err = this.sharedService.handleError(error);
      return err
    }
  }
  async getBestSeller() {
    try {
      const res = this.http.get(API.BEST_SELLER);
      const data = await lastValueFrom(res);
      const lstProduct: Product[] = [];
      (data as any).data.forEach((el:any) => {
        const parsedProduct = this.fromJsonData(el);
        lstProduct.push(parsedProduct);
      });
      return lstProduct;
    } catch (error: any) {
      const err = this.sharedService.handleError(error);
      return err
    }
  }
  async getPopularProduct() {
    try {
      const res = this.http.get(API.POPULAR_PRODUCT);
      const data = await lastValueFrom(res);
      const lstProduct: Product[] = [];
      (data as any).data.forEach((el:any) => {
        const parsedProduct = this.fromJsonData(el);
        lstProduct.push(parsedProduct);
      });
      return lstProduct;
    } catch (error: any) {
      const err = this.sharedService.handleError(error);
      return err
    }
  }

  constructor(private http: HttpClient, private sharedService: SharedService) { }
}
