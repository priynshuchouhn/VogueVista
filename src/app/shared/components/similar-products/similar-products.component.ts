import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrl: './similar-products.component.css'
})
export class SimilarProductsComponent implements AfterViewInit {

  similarProducts = Array(5).fill(0)

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const scrollContainer = this.el.nativeElement.querySelector('#similarProducts');
    const hammer = new Hammer(scrollContainer);

    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammer.on('pan', (event) => {
      scrollContainer.scrollLeft -= event.deltaX;
    });
  }

}
