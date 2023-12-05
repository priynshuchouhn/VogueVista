import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-to-visit-card',
  templateUrl: './category-to-visit-card.component.html',
  styleUrl: './category-to-visit-card.component.css'
})
export class CategoryToVisitCardComponent {

  @Input() category:any;
}
