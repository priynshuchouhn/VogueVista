import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { take } from 'rxjs';
import { Cart } from 'src/app/shared/model/product/cart.model';
import { Product } from 'src/app/shared/model/product/product.model';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { addItemToCart, updateCartItem } from 'src/app/shared/services/store/cart/cart.actions';
import { selectCartItemById } from 'src/app/shared/services/store/cart/cart.selectors';

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
  isLoading: boolean = false



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
    this.isLoading = true
    try {
      const item$ = this.store.select(selectCartItemById(this.product.productId, this.selectedSizeVariant))
      item$.pipe(take(1)).subscribe(async item => {
        if (!item) {
          const cart = {
            productId: this.product.productId,
            sizeVariant: this.selectedSizeVariant,
            quantity: this.quantity
          }
          const cartItem = await this.cartService.addToCart(cart)
          this.isLoading = false
          if (cartItem) {
            this.store.dispatch(addItemToCart({ item: <Cart>cartItem }));
          }
        } else {
          const cart = {
           cartId: item.cartId,
            quantity: ++item.quantity
          }
          const cartItem = await this.cartService.updateCart(cart)
          this.isLoading = false
          console.log(cartItem);
          if (cartItem) {
            this.store.dispatch(updateCartItem({ updatedItem: <Cart>cartItem }));
          }
        }
      })
    } catch (error) {
      console.log(error);
    }

  }
}
