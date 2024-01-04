import { RouterModule, Routes } from "@angular/router";
import { ProductListingComponent } from "./product-listing/product-listing.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NgModule } from "@angular/core";
import { productListResolver } from "src/app/shared/resolver/product-list.resolver";
import { productDetailResolver } from "src/app/shared/resolver/product-detail.resolver";

const routes: Routes = [
    {path:':category/l', component: ProductListingComponent, resolve: {productData : productListResolver}},
    {path:':title/:id/d', component: ProductDetailComponent, resolve: {productDetailData: productDetailResolver}},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}
