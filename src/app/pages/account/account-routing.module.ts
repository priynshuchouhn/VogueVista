import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileDetailComponent } from "./profile-detail/profile-detail.component";
import { AddressComponent } from "./address/address.component";
import { NotificationComponent } from "./notification/notification.component";
import { MyOrderComponent } from "./my-order/my-order.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { AccountWebComponent } from "./account-web/account-web.component";
import { AccountComponent } from "./account.component";
import { AccountMobileComponent } from "./account-mobile/account-mobile.component";


const routes: Routes = [
    {path: '', redirectTo: 'profile', pathMatch: 'full'},
    {
        path: '', component: AccountWebComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'profile-detail', component: ProfileDetailComponent },
            { path: 'address', component: AddressComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'my-orders', component: MyOrderComponent },
            { path: 'change-password', component: ChangePasswordComponent }
        ],
        
    },
    {
        path: 'm', component: AccountComponent,
        children: [
            {path:'', component: AccountMobileComponent},
            { path: 'profile', component: ProfileComponent },
            { path: 'profile-detail', component: ProfileDetailComponent },
            { path: 'address', component: AddressComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'my-orders', component: MyOrderComponent },
            { path: 'change-password', component: ChangePasswordComponent }
        ],
        
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class AccountRoutingModule { }