import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryToVisitCardComponent } from './category-to-visit-card/category-to-visit-card.component';



@NgModule({
  declarations: [
    HomeComponent, 
    CategoryToVisitCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
