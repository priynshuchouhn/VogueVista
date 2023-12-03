import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductListingComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
