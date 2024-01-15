import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/shared/services/product/cart.service';
import { emptyCart, removeItemFromCart } from 'src/app/shared/services/store/cart/cart.actions';
import { selectCartItems, selectCartTotal } from 'src/app/shared/services/store/cart/cart.selectors';
import { StripePaymentElementComponent, StripeService } from 'ngx-stripe';
import { StripeElementsOptions, StripePaymentElementOptions } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { AddressService } from 'src/app/shared/services/user/address.service';
import { Address } from 'src/app/shared/model/user/address.model';
import { take } from 'rxjs';
import { Cart } from 'src/app/shared/model/product/cart.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { Router } from '@angular/router';


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
  paymentMethod: string = 'card'
  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;
  paying = signal(false);
  deliveryCharges: number = 50
  selectedAddress!: Address

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


  constructor(private store: Store, private cartService: CartService, public stripe: StripeService, private paymentService: PaymentService, private addressService: AddressService, private orderService: OrderService, private router: Router) { }


  ngOnInit() {
    this.cartTotal$.subscribe(total => {
      if (total > 0) {
        const amount = (total + this.deliveryCharges) * 100
        this.paymentService.createPaymentIntent(amount).subscribe(res => {
          this.elementsOptions.clientSecret = res.client_secret as string
        })
      }
    })
    this.getAddresses();
  }

  async getAddresses() {
    try {
      this.lstAddress = await this.addressService.getAddress() as Address[];
      this.selectedAddress = this.lstAddress.find(el => el.isDefault == true) as Address
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

  async createOrderDetail() {
    const total = await new Promise((resolve) => {
      this.cartTotal$.pipe(take(1)).subscribe(resolve);
    }) as number;
    const cartItems = await new Promise(resolve => {
      this.cartItem$.pipe(take(1)).subscribe(resolve)
    }) as Cart[]
    const products: any = [];
    cartItems.forEach(el => {
      const product = {
        productId: el.productId,
        quantity: el.quantity,
        sizeVariant: el.sizeVariant,
      }
      products.push(product);
    })
    const data = {
      "shippingAddress": this.selectedAddress.addressId,
      "totalAmount": total + this.deliveryCharges,
      "paymentMethod": this.paymentMethod,
      "products": products,
      "discount": "0.0",
      "shippingCharges": this.deliveryCharges,
      "productList": cartItems
    }
    return data;
  }

  addressChanged(address: Address) {
    this.selectedAddress = address
  }

  generatePaymentId() {
    const prefix = 'VVCOD';
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(6, '0');
    const paymentId = `${prefix}${randomPart}`;
    return paymentId;
  }

  async pay() {
    if (this.paying()) return;
    this.paying.set(true);
    if (this.paymentMethod == 'card') {
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
                  state: this.selectedAddress.state,
                  country: 'India'
                }
              }
            }
          },
          redirect: 'if_required'
        })
        .subscribe(async (result: any) => {
          this.paying.set(false);
          console.log(result);
          const body = await this.createOrderDetail();
          Object.assign(body, { orderDate: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true }) })
          if (result.error) {
            this.router.navigate(['/order/failed'], { state: { data: body } });
          } else {
            if (result.paymentIntent.status === 'succeeded') {
              Object.assign(body, { paymentId: result.paymentIntent.id })
              const res = await this.orderService.addOrder(body);
              if (res) {
                this.router.navigate(['/order/success'], { state: { data: res } });
                this.store.dispatch(emptyCart());
              }
            }
          }
        });
    } else {
      const body = await this.createOrderDetail();
      Object.assign(body, { paymentId: this.generatePaymentId() })
      Object.assign(body, { orderDate: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true }) })
      // this.router.navigate(['/order/failed'], { state: { data: body } });
      const res = await this.orderService.addOrder(body);
      this.paying.set(false);
      if (res) {
        this.router.navigate(['/order/success'], { state: { data: res } });
        this.store.dispatch(emptyCart());
      }else{
        this.router.navigate(['/order/failed'], { state: { data: body } });
      }
    }
  }



}
