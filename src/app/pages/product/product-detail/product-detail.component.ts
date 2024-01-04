import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: Product
  similarProducts!: Product[]

  constructor(private route: ActivatedRoute){
    this.route.data.subscribe(res => {
      console.log(res);
      this.product = res['productDetailData']['product'];
      this.similarProducts = res['productDetailData']['similarProducts']
    })
  }

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, dots: true, prevArrow: false, nextArrow: false,draggable: true, asNavFor:'.thumbnail'}
  slideVerticalConfig = {"slidesToShow": 3, "slidesToScroll": 1, infinite:true, prevArrow: false, nextArrow: false, vertical:true, asNavFor:'.main-slider', draggable: true,verticalSwiping:true, focusOnSelect: true}
 

}
