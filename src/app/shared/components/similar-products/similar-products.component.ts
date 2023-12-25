import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrl: './similar-products.component.css'
})
export class SimilarProductsComponent implements AfterViewInit {

  similarProducts = Array(5).fill(0)

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      import('hammerjs').then((HammerModule) => {
        if (window.innerWidth >= 1024) {
          const Hammer = HammerModule;
          const scrollContainer = this.el.nativeElement.querySelector('#similarProducts');
          const hammer = new Hammer(scrollContainer);
          hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
          hammer.on('pan', (event: any) => {
            scrollContainer.scrollLeft -= event.deltaX;
          });
        }
      }).catch(error => {
        console.error('Error loading hammerjs:', error);
      });;
    }
    // if (isPlatformBrowser(this.platformId)) {
    //   if (window.innerWidth >= 1024) {
    //     const scrollContainer = this.el.nativeElement.querySelector('#similarProducts');
    //     console.log(scrollContainer);
        
    //     const hammer = new Hammer(scrollContainer);
    //     hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    //     hammer.on('pan', (event: any) => {
    //       scrollContainer.scrollLeft -= event.deltaX;
    //     });
    //   }
    // }
  }

}
