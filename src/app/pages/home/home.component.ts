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
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 2, infinite: true,dots: true,};
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
}
