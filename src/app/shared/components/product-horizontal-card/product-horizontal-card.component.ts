import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-horizontal-card',
  templateUrl: './product-horizontal-card.component.html',
  styleUrl: './product-horizontal-card.component.css'
})
export class ProductHorizontalCardComponent {

  @Input('product') product!: Product
  ratings = Array(4).fill(0)

}
