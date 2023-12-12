import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSuccessComponent } from './success/success.component';
import { OrderDetailComponent } from './detail/detail.component';
import { OrderFailedComponent } from './failed/failed.component';
import { OrderRoutingModule } from './order-routing.module';



@NgModule({
  declarations: [
    OrderSuccessComponent,
    OrderDetailComponent,
    OrderFailedComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
