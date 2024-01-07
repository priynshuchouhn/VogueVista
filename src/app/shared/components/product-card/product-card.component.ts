import { Component, Input } from '@angular/core';
import { Product } from '../../model/product/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input('product') product! : Product
  ratings = Array(4).fill(0)
}
