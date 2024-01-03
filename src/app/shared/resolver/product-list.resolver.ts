import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product/product.service';

export const productListResolver: ResolveFn<any> = async (route, state) => {
  const data = await inject(ProductService).getProductList();
  return data;
};
