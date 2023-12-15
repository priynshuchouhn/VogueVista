import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductListingComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
