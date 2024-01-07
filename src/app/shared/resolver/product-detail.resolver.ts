import { ResolveFn } from '@angular/router';
import { Product } from '../model/product/product.model';
import { ProductService } from '../services/product/product.service';
import { inject } from '@angular/core';

export const productDetailResolver: ResolveFn<any> = async (route, state) => {
  return inject(ProductService).getProductDetail(route.params['id']);
};
