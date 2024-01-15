import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { NotificationComponent } from './notification/notification.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddressComponent } from './address/address.component';
import { AccountComponent } from './account.component';
import { AccountWebComponent } from './account-web/account-web.component';
import { AccountMobileComponent } from './account-mobile/account-mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    ProfileDetailComponent,
    MyOrderComponent,
    NotificationComponent,
    ChangePasswordComponent,
    AddressComponent,
    AccountWebComponent,
    AccountMobileComponent

  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AccountModule { }
