import { Component } from '@angular/core';

@Component({
  selector: 'app-product-horizontal-card',
  templateUrl: './product-horizontal-card.component.html',
  styleUrl: './product-horizontal-card.component.css'
})
export class ProductHorizontalCardComponent {
  ratings = Array(4).fill(0)

}
