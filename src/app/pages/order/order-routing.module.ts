import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderSuccessComponent } from "./success/success.component";
import { OrderDetailComponent } from "./detail/detail.component";
import { OrderFailedComponent } from "./failed/failed.component";

const routes: Routes = [
    {path: 'success', component: OrderSuccessComponent },
    {path: 'failed', component: OrderFailedComponent },
    {path: 'detail/:orderId', component: OrderDetailComponent },
]

@NgModule({
    imports:[ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})

export class OrderRoutingModule{}