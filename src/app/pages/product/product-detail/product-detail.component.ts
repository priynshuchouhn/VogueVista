import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Cart } from 'src/app/shared/model/product/cart.model';
import { Product } from 'src/app/shared/model/product/product.model';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { addItemToCart } from 'src/app/shared/services/store/cart/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: Product
  quantity: Number = 1
  selectedSizeVariant!: string
  similarProducts: Product[] = []



  constructor(private route: ActivatedRoute, private cartService: CartService, private store: Store) {
    this.route.data.subscribe(res => {
      this.product = res['productDetailData']['product'];
      this.similarProducts = res['productDetailData']['similarProducts']
      if (this.product.size!.length > 0) {
        this.selectedSizeVariant = this.product.size![0].sizeName
      }
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

  toggleSizeVairant(sizeName: string) {
    this.selectedSizeVariant = sizeName
  }

  quantityChanged(quanity: Number) {
    this.quantity = quanity
  }


  async addProductToCart() {

    const cart = {
      productId: this.product.productId,
      sizeVariant: this.selectedSizeVariant,
      quantity: this.quantity
    }
    const cartItem = await this.cartService.addToCart(cart)
    console.log(cartItem);
    if(cartItem){
      this.store.dispatch(addItemToCart({item: <Cart>cartItem}));
    }

  }

}
