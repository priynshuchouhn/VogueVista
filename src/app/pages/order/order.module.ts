import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderSuccessComponent } from './success/success.component';
import { OrderDetailComponent } from './detail/detail.component';
import { OrderFailedComponent } from './failed/failed.component';



@NgModule({
  declarations: [
    OrderComponent,
    OrderSuccessComponent,
    OrderDetailComponent,
    OrderFailedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
