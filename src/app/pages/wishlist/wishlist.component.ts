import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  cartItem = Array(3).fill(0)
  similarProducts = Array(5).fill(0)

}
