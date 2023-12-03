import { Routes } from "@angular/router";

export const content : Routes = [
    { path: '' , loadChildren: ()=> import('../../pages/home/home.module').then((m)=> m.HomeModule)},
    { path: 'product' , loadChildren: ()=> import('../../pages/product/product.module').then((m)=> m.ProductModule)},
]



 