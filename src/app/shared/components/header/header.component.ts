import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../../services/side-menu.service';
import { CategoryService } from '../../services/product/category.service';
import { Category } from '../../model/product/category.model';
import { Store } from '@ngrx/store';
import { selectCartItemsLength } from '../../services/store/cart/cart.selectors';
import { selectWishlistItemsLength } from '../../services/store/wishlist/wishlist.selectors';
import { CartService } from '../../services/product/cart.service';
import { loadCartItems } from '../../services/store/cart/cart.actions';
import { Cart } from '../../model/product/cart.model';
import { UserService } from '../../services/user.service';
import { WishlistService } from '../../services/product/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lstCategory: Category[] = []
  cartItems$ = this.store.select(selectCartItemsLength);
  wishlistItems$ = this.store.select(selectWishlistItemsLength);
  
  constructor(public sideMenuService: SideMenuService, private categoryService: CategoryService, private store: Store, private cartService: CartService, private userService: UserService, private wishlistService: WishlistService) { }
  
  async ngOnInit() {
    this.userService.getUserData();
    this.lstCategory = await this.categoryService.getAllCategory();
    this.cartService.loadCartItem();
    this.wishlistService.loadWishlist();
  }

  toggleSideMenu() {
    this.sideMenuService.sideMenuCollapsed = !this.sideMenuService.sideMenuCollapsed
  }

  toggleSearch() {
    this.sideMenuService.searchCollapsed = !this.sideMenuService.searchCollapsed
  }
}
