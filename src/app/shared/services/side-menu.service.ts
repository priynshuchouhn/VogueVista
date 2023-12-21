import { Injectable } from '@angular/core';
import { MenuItems } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  private menuItem: MenuItems[] = [
    new MenuItems(1, 'Fashion', [
      new MenuItems(2, 'Men\'s Clothing'),
      new MenuItems(3, 'Women\'s Clothing'),
      new MenuItems(4, 'Kids\' Clothing'),
      new MenuItems(5, 'Footwear'),
      new MenuItems(6, 'Accessories')
    ]),
    new MenuItems(7, 'Electronics', [
      new MenuItems(8, 'Smartphones'),
      new MenuItems(9, 'Laptops & Computers'),
      new MenuItems(10, 'Televisions'),
      new MenuItems(11, 'Audio Devices'),
      new MenuItems(12, 'Cameras & Photography')
    ]),
    new MenuItems(13, 'Books', [
      new MenuItems(14, 'Fiction'),
      new MenuItems(15, 'Non-fiction'),
      new MenuItems(16, 'Children\'s Books'),
      new MenuItems(17, 'Best Sellers'),
      new MenuItems(18, 'Self-help & Motivation')
    ]),
    new MenuItems(19, 'Kitchen Ware', [
      new MenuItems(20, 'Cookware'),
      new MenuItems(21, 'Bakeware'),
      new MenuItems(22, 'Small Appliances'),
      new MenuItems(23, 'Cutlery & Utensils'),
      new MenuItems(24, 'Storage & Organization')
    ])
  ]

  sideMenuCollapsed: boolean = true

  getMenuItem(){
    return this.menuItem.slice()
  }

  constructor() { }
}
