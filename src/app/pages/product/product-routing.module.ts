import { RouterModule, Routes } from "@angular/router";
import { ProductListingComponent } from "./product-listing/product-listing.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path:'l', component: ProductListingComponent},
    {path:'d', component: ProductDetailComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}
