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
import { authGuard } from "src/app/shared/guard/auth.guard";


const routes: Routes = [
    {path: '', redirectTo: 'profile', pathMatch: 'full'},
    {
        path: '', component: AccountWebComponent,
        children: [
            { path: 'profile', component: ProfileComponent , canActivate: [authGuard]},
            { path: 'profile-detail', component: ProfileDetailComponent , canActivate: [authGuard]},
            { path: 'address', component: AddressComponent , canActivate: [authGuard]},
            { path: 'notification', component: NotificationComponent , canActivate: [authGuard]},
            { path: 'my-orders', component: MyOrderComponent , canActivate: [authGuard]},
            { path: 'change-password', component: ChangePasswordComponent, canActivate: [authGuard] }
        ],
        
    },
    {
        path: 'm', component: AccountComponent,
        children: [
            {path:'', component: AccountMobileComponent, canActivate: [authGuard]},
            { path: 'profile', component: ProfileComponent , canActivate: [authGuard]},
            { path: 'profile-detail', component: ProfileDetailComponent , canActivate: [authGuard]},
            { path: 'address', component: AddressComponent , canActivate: [authGuard]},
            { path: 'notification', component: NotificationComponent , canActivate: [authGuard]},
            { path: 'my-orders', component: MyOrderComponent , canActivate: [authGuard]},
            { path: 'change-password', component: ChangePasswordComponent , canActivate: [authGuard]}
        ],
        
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountRoutingModule { }