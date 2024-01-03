import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {

  constructor(private route: ActivatedRoute, private productService: ProductService){
    this.route.data.subscribe(res => {
      this.lstProduct = res['productData']
      // forEach((el:any) => {
      //   const parsedProduct = this.productService.fromJsonData(el);
      //   this.lstProduct.push(parsedProduct);
      // });
    });
  }

  lstProduct: Product[] = []

}
