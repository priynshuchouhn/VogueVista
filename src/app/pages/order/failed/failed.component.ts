import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrl: './failed.component.css'
})
export class OrderFailedComponent {
  data: any;
  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state!['data']
    if (!this.data) {
      this.router.navigate(['/checkout']);
    }
  }

}
