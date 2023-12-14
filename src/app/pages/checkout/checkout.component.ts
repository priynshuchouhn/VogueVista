import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  cartItem = Array(3).fill(0)
  similarProducts = Array(5).fill(0)
  lstAddress = Array(3).fill(0)
  paymentMethod :string = 'UPI' 


  
}
