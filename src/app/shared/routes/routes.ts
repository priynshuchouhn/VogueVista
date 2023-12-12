import { Routes } from "@angular/router";

export const content : Routes = [
    { path: '' , loadChildren: ()=> import('../../pages/home/home.module').then((m)=> m.HomeModule)},
    { path: 'product' , loadChildren: ()=> import('../../pages/product/product.module').then((m)=> m.ProductModule)},
    { path: 'account' , loadChildren: ()=> import('../../pages/account/account.module').then((m)=> m.AccountModule)},
    { path: 'cart' , loadChildren: ()=> import('../../pages/cart/cart.module').then((m)=> m.CartModule)},
    { path: 'wishlist' , loadChildren: ()=> import('../../pages/wishlist/wishlist.module').then((m)=> m.WishlistModule)},
    { path: 'order' , loadChildren: ()=> import('../../pages/order/order.module').then((m)=> m.OrderModule)},
]



 