import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrl: './quantity-control.component.css'
})
export class QuantityControlComponent {

  quantity : number = 1

  increment(){
    this.quantity++
  }

  decrement(){
    if(this.quantity>1){
      this.quantity--;
    }
  }

}
