import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Product } from 'src/app/shared/model/product/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: Product
  similarProducts: Product[] = []



  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(res => {
      this.product = res['productDetailData']['product'];
      this.similarProducts = res['productDetailData']['similarProducts']
      this.onDataChange()
    })
  }

  trackByFn(index: number, item: any): any {
    return item; // Replace 'uniqueIdentifier' with an actual property of your data that provides a unique identifier.
  }

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, dots: true, prevArrow: false, nextArrow: false, draggable: true, asNavFor: '.thumbnail' }
  slideVerticalConfig = { "slidesToShow": 3, "slidesToScroll": 1, infinite: true, prevArrow: false, nextArrow: false, vertical: true, asNavFor: '.main-slider', draggable: true, verticalSwiping: true, focusOnSelect: true }

  @ViewChild('slickMain') slickMain!: SlickCarouselComponent;
  @ViewChild('slickThumbnail') slickThumbnail!: SlickCarouselComponent;

  // When the slide data changes
  onDataChange() {
    if (this.slickMain) {
      this.slickMain.unslick();
      setTimeout(() => {
        this.slickMain.initSlick();
      }, 500)
    }
    if (this.slickThumbnail) {
      this.slickThumbnail.unslick();
      setTimeout(() => {
        this.slickThumbnail.initSlick();
      }, 500)
    }
  }
}
