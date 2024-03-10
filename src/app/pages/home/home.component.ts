import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Product } from 'src/app/shared/model/product/product.model';
import { Banner, homePageBanner } from 'src/app/shared/model/promotionals/banner.model';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { BannerService } from 'src/app/shared/services/promotionals/banner.service';
import { PushNotificationService } from 'src/app/shared/services/push-notification.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerSlides: homePageBanner[] = []
  promoBanner!: Banner

  constructor(private bannerService: BannerService, private productService: ProductService,private _swPush: SwPush, private pushNotificationService: PushNotificationService) { }

  async ngOnInit() {
    this.bannerSlides = await this.bannerService.getHomeBanner();
    this.promoBanner = await this.bannerService.getHomePromoBanner();
    this.lstTrendingArrivals = await this.productService.getTrendingArrivals() as Product[];
    this.lstBestSeller = await this.productService.getBestSeller() as Product[];
    this.lstPopularProducts = await this.productService.getPopularProduct() as Product[];
    this.requestSubscription();
    
  }


  requestSubscription = () => {
    if (!this._swPush.isEnabled) {
      console.log("Notification is not enabled.");
      return;
    }

    this._swPush.requestSubscription({
      serverPublicKey: environment.vapidPublicKey
    }).then((_) => {
      this.pushNotificationService.addSub(_)
      // console.log(JSON.stringify(_));
    }).catch((_) => console.log);
  };

  lstTrendingArrivals : Product[] = []
  lstBestSeller : Product[] = []
  lstPopularProducts : Product[] = []

  categoriesToVisit = [
    { image:'assets/images/clothing.png', category_name: 'Fashion', bgColorClass: 'bg-eggshell' },
    { image:'assets/images/electronics.png', category_name: 'Electronics', bgColorClass: 'bg-creamy-ivory' },
    { image:'assets/images/kitchen-ware.png', category_name: 'Kitchen Ware', bgColorClass: 'bg-linen-white' },
  ];

  products = Array(4).fill(0);

  
  bannerConfig = { "slidesToShow": 1, "slidesToScroll": 1, infinite: true, dots: false, prevArrow: false, nextArrow: false, autoplay: true, autoplaySpeed: 3000 };
  slideConfig = { "slidesToShow": 2, "slidesToScroll": 2, infinite: true, dots: true, prevArrow: false, nextArrow: false };
  slideConfigTwo = {
    "slidesToShow": 3, "slidesToScroll": 1, responsive: [
      {
        breakpoint: 692,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  };
}
