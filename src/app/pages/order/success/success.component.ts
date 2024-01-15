import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class OrderSuccessComponent implements OnInit {
  data: any;
  deliveryDate!: Date
  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state!['data']
    if (!this.data) {
      this.router.navigate(['/checkout']);
    }
  }
  ngOnInit(): void {
    const currentDate = new Date(this.data.orderDate);
    this.deliveryDate = new Date();
    this.deliveryDate.setDate(currentDate.getDate() + 4);
  }
}
