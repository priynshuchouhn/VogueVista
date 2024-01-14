import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { removeItemFromCart } from 'src/app/shared/services/store/cart/cart.actions';
import { selectCartItems, selectCartTotal } from 'src/app/shared/services/store/cart/cart.selectors';
import { StripePaymentElementComponent, StripeService } from 'ngx-stripe';
import { StripeElementsOptions, StripePaymentElementOptions } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { take } from 'rxjs';
import { AddressService } from 'src/app/shared/services/user/address.service';
import { Address } from 'src/app/shared/model/user/address.model';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  cartItem$ = this.store.select(selectCartItems);
  cartTotal$ = this.store.select(selectCartTotal)
  similarProducts = Array(5).fill(0)
  lstAddress: Address[] = []
  paymentMethod: string = 'UPI'
  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;
  paying = signal(false);
  deliveryCharges:number = 50
  selectedAddress!: Address


  constructor(private store: Store, private cartService: CartService, public stripe: StripeService, private paymentService: PaymentService, private addressService:AddressService) { }
  
  
  ngOnInit(){
    this.cartTotal$.subscribe(total => {
      if(total > 0){
        const amount = (total+this.deliveryCharges)*100
        this.paymentService.createPaymentIntent(amount).subscribe(res => {
          this.elementsOptions.clientSecret = res.client_secret as string
        })
      }
    })
    this.getAddresses();
  }

  async getAddresses(){
    try {
      this.lstAddress = await this.addressService.getAddress() as Address[];
      this.selectedAddress = this.lstAddress.find(el=> el.isDefault == true) as Address
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFromCart(cartId: string) {
    const res = await this.cartService.deleteFromCart(cartId);
    if (res) {
      this.store.dispatch(removeItemFromCart({ itemId: cartId }));
    }
  }

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    appearance: {
      theme: 'stripe',
    },
    clientSecret: ''
  };

  paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'accordion',
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: true
    }
  };

  pay() {
    if (this.paying()) return;
    this.paying.set(true);
    this.stripe
      .confirmPayment({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: this.selectedAddress.name,
              address: {
                line1: this.selectedAddress.addressLine1,
                line2: this.selectedAddress.addressLine2,
                postal_code: this.selectedAddress.pincode.toString(),
                city: this.selectedAddress.city,
                state:this.selectedAddress.state,
                country: 'India'
              }
            }
          }
        },
        redirect: 'if_required'
      })
      .subscribe((result:any) => {
        this.paying.set(false);
        if (result.error) {
          console.log(result.error.message);
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            console.log(result);
          }
        }
      });
  }


  
}
