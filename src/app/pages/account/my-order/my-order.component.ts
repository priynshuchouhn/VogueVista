import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/model/order.model';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.css'
})
export class MyOrderComponent implements OnInit {

  constructor(private orderService: OrderService){}

  async ngOnInit() {
   this.lstOrder = await this.orderService.getOrders() as Order[]
   console.log(this.lstOrder);
  }
  lstOrder: Order[] = []

}
