import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from 'src/environments/environment';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxStripeModule.forRoot(environment.STRIPE_PUBLIC_KEY),

  ]
})
export class CheckoutModule { }
