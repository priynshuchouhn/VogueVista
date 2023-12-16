import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/layouts/content/content.component';
import { FullComponent } from './components/layouts/full/full.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AnnoucementBarComponent } from './components/annoucement-bar/annoucement-bar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductImageCardComponent } from './components/product-image-card/product-image-card.component';
import { ProductHorizontalCardComponent } from './components/product-horizontal-card/product-horizontal-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';



@NgModule({
  declarations: [
    ContentComponent,
    FullComponent,
    HeaderComponent,
    FooterComponent,
    AnnoucementBarComponent,
    ProductCardComponent,
    ProductImageCardComponent,
    ProductHorizontalCardComponent,
    DropdownComponent,
    SimilarProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductImageCardComponent,
    ProductHorizontalCardComponent,
    DropdownComponent,
    SimilarProductsComponent,
  ]
})
export class SharedModule { }
