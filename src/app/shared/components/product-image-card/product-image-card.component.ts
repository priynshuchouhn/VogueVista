import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-image-card',
  templateUrl: './product-image-card.component.html',
  styleUrl: './product-image-card.component.css'
})
export class ProductImageCardComponent {
  @Input('product') product!: Product

}
