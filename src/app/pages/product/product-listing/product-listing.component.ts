import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {

  products = Array(15).fill(0)

}
