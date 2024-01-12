import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/shared/model/product/cart.model';
import { Product } from 'src/app/shared/model/product/product.model';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { removeItemFromCart, updateCartItem } from 'src/app/shared/services/store/cart/cart.actions';
import { selectCartItems, selectCartTotal } from 'src/app/shared/services/store/cart/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  similarProducts!: Product[]
  deliveryDate!: Date
  cartItem$ = this.store.select(selectCartItems);
  cartTotal$ = this.store.select(selectCartTotal)
  constructor(private store: Store, private productService: ProductService, private cartService: CartService){}
  async ngOnInit() {
    this.similarProducts = await this.productService.getBestSeller() as Product[];
    const currentDate = new Date();
    this.deliveryDate = new Date();
    this.deliveryDate.setDate(currentDate.getDate() + 4);
  }

  async deleteFromCart(cartId: string){
    const res = await this.cartService.deleteFromCart(cartId);
    console.log(res);
    if(res){
      this.store.dispatch(removeItemFromCart({itemId : cartId}));
    }
  }

  async changedQuantity(quantity: number, item: Cart){
    console.log(quantity, item.quantity)
    if(quantity > item.quantity){
      const cart = {
        cartId: item.cartId,
         quantity: ++item.quantity
       }
       const cartItem = await this.cartService.updateCart(cart)
       console.log(cartItem);
       if (cartItem) {
         this.store.dispatch(updateCartItem({ updatedItem: <Cart>cartItem }));
       }
    }else{
      const cart = {
        cartId: item.cartId,
         quantity: --item.quantity
       }
       const cartItem = await this.cartService.updateCart(cart)
       console.log(cartItem);
       if (cartItem) {
         this.store.dispatch(updateCartItem({ updatedItem: <Cart>cartItem }));
       }
    }
  }

}
