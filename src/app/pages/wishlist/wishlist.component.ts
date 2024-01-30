import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/model/product/product.model';
import { Wishlist } from 'src/app/shared/model/product/wishlist.model';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { selectWishlistItems } from 'src/app/shared/services/store/wishlist/wishlist.selectors';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
  constructor(private store: Store, private productService: ProductService){}
  async ngOnInit() {
    this.similarProducts = await this.productService.getBestSeller() as Product[];

  }

  wishlistItem$ = this.store.select(selectWishlistItems);
  similarProducts: Product[] = []

}
