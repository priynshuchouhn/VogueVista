import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrl: './quantity-control.component.css'
})
export class QuantityControlComponent {

  @Input('quantity') quantity : number = 1
  @Input('stockQuantity') stockQuantity : number = 1
  @Output('quantityUpdated') quantityUpdated = new EventEmitter<Number>();

  increment(){
    if(this.quantity < this.stockQuantity){
      this.quantity++
      this.quantityUpdated.emit(this.quantity);
    }
  }
  
  decrement(){
    if(this.quantity>1){
      this.quantity--;
      this.quantityUpdated.emit(this.quantity);
    }
  }

}
