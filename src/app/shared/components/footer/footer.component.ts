import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItemsLength } from '../../services/store/cart/cart.selectors';
import { selectWishlistItemsLength } from '../../services/store/wishlist/wishlist.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private store: Store){}

  cartItems$ = this.store.select(selectCartItemsLength);
  wishlistItems$ = this.store.select(selectWishlistItemsLength);

}
