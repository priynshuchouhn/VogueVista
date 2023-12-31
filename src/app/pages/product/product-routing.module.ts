import { RouterModule, Routes } from "@angular/router";
import { ProductListingComponent } from "./product-listing/product-listing.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path:':category/l', component: ProductListingComponent},
    {path:':title/:id/d', component: ProductDetailComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}
