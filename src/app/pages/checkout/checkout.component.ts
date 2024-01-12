import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { removeItemFromCart } from 'src/app/shared/services/store/cart/cart.actions';
import { selectCartItems, selectCartTotal } from 'src/app/shared/services/store/cart/cart.selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItem$ = this.store.select(selectCartItems);
  cartTotal$ = this.store.select(selectCartTotal)

  constructor(private store: Store, private cartService:CartService){}

  // cartItem = Array(3).fill(0)
  similarProducts = Array(5).fill(0)
  lstAddress = Array(3).fill(0)
  paymentMethod :string = 'UPI' 

  async deleteFromCart(cartId: string){
    const res = await this.cartService.deleteFromCart(cartId);
    console.log(res);
    if(res){
      this.store.dispatch(removeItemFromCart({itemId : cartId}));
    }
  }
  
}
