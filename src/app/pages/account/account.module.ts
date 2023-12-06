import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { NotificationComponent } from './notification/notification.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailComponent,
    MyOrderComponent,
    NotificationComponent,
    ChangePasswordComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
