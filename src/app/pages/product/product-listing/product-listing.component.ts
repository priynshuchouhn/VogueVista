import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/model/product/product.model';
import { Wishlist } from 'src/app/shared/model/product/wishlist.model';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { selectWishlistItems } from 'src/app/shared/services/store/wishlist/wishlist.selectors';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {

  lstProduct: Product[] = [];
  wishlistItems$ = this.store.select(selectWishlistItems)

  constructor(private route: ActivatedRoute, private productService: ProductService, private store: Store) {
    this.route.data.subscribe(res => {
      this.lstProduct = res['productData']

    });
    this.wishlistItems$.subscribe((items: Wishlist[]) => {
      items.forEach((item: Wishlist) => {
        const index = this.lstProduct.findIndex(el => el.productId == item.product.productId);
        if (index !== -1 && !this.lstProduct[index].isFavorite) {
          this.lstProduct[index].isFavorite = true;
        }
      })
    })
  }


}
