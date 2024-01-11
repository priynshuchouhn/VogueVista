import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/model/product/product.model';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { removeItemFromCart } from 'src/app/shared/services/store/cart/cart.actions';
import { selectCartItems } from 'src/app/shared/services/store/cart/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  similarProducts!: Product[]
  cartItem$ = this.store.select(selectCartItems);
  constructor(private store: Store, private productService: ProductService, private cartService: CartService){}
  async ngOnInit() {
    this.similarProducts = await this.productService.getBestSeller() as Product[];
  }

  async deleteFromCart(cartId: string){
    const res = await this.cartService.deleteFromCart(cartId);
    if(res){
      this.store.dispatch(removeItemFromCart({itemId : cartId}));
    }
  }

}
