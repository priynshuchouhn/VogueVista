import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categoriesToVisit =  [
    {category_name: 'Clothing', bgColorClass: 'bg-eggshell'},
    {category_name: 'Bags', bgColorClass: 'bg-creamy-ivory'},
    {category_name: 'Shoes', bgColorClass: 'bg-linen-white'},
  ];

  products = Array(4).fill(0);
}
