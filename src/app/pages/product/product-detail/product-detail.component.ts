import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, dots: true, prevArrow: false, nextArrow: false,draggable: true, asNavFor:'.thumbnail'}
  slideVerticalConfig = {"slidesToShow": 3, "slidesToScroll": 1, prevArrow: false, nextArrow: false, vertical:true, asNavFor:'.main-slider', draggable: true,verticalSwiping:true, focusOnSelect: true}
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];

}
