import { Component, Input } from '@angular/core';
import { Product } from '../../model/product/product.model';
import { WishlistService } from '../../services/product/wishlist.service';
import { Store } from '@ngrx/store';
import { addItemToCart } from '../../services/store/cart/cart.actions';
import { addItemToWishlist, removeItemFromWishlist } from '../../services/store/wishlist/wishlist.actions';
import { selectWishlistItemById, selectWishlistItems } from '../../services/store/wishlist/wishlist.selectors';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private wishlistService: WishlistService, private store: Store){}

  @Input('product') product! : Product
  ratings = Array(4).fill(0)

  async toggleWishlist(){
    if(this.product.isFavorite){
      const Wishlist$ = this.store.select(selectWishlistItemById(this.product.productId));
      Wishlist$.pipe(take(1)).subscribe(async item => {
        if(item){
            const body = {
              wishlistId: item.wishlistId
            }
           const data = await this.wishlistService.removeFromWishlist(body)
           if(data){
            this.store.dispatch(removeItemFromWishlist({itemId: item.wishlistId}));
           }
        }
      })
    }else{
      const body = {
        productId: this.product.productId
      }
     const data = await this.wishlistService.addWishlistItem(body)
     if(data){
      this.store.dispatch(addItemToWishlist({item: data}));
     }
    }
    this.product.isFavorite = !this.product.isFavorite
  }
}
