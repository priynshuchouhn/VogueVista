import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../../services/side-menu.service';
import { CategoryService } from '../../services/product/category.service';
import { Category } from '../../model/product/category.model';
import { Store } from '@ngrx/store';
import { selectCartItemsLength } from '../../services/store/cart/cart.selectors';
import { selectWishlistItemsLength } from '../../services/store/wishlist/wishlist.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public sideMenuService: SideMenuService, private categoryService: CategoryService, private store: Store) { }
  lstCategory: Category[] = []
  cartItems$ = this.store.select(selectCartItemsLength);
  wishlistItems$ = this.store.select(selectWishlistItemsLength);
  async ngOnInit() {
    this.lstCategory = await this.categoryService.getAllCategory();
  }
  userLogined: boolean = false;
  authPage: boolean = false

  toggleSideMenu() {
    this.sideMenuService.sideMenuCollapsed = !this.sideMenuService.sideMenuCollapsed
  }

  toggleSearch() {
    this.sideMenuService.searchCollapsed = !this.sideMenuService.searchCollapsed
  }
}
