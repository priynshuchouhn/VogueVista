import { Injectable } from '@angular/core';
import { MenuItems } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  
  sideMenuCollapsed: boolean = false
  searchCollapsed: boolean = true

  private menuItem: MenuItems[] = [
    new MenuItems(1, 'Fashion', [
      new MenuItems(2, 'Men\'s Clothing', [],'fashion'),
      new MenuItems(3, 'Women\'s Clothing',[],'fashion'),
      new MenuItems(4, 'Kids\' Clothing', [],'fashion'),
      new MenuItems(5, 'Footwear', [],'fashion'),
      new MenuItems(6, 'Accessories', [],'fashion')
    ]),
    new MenuItems(7, 'Electronics', [
      new MenuItems(8, 'Smartphones',[],'electronics'),
      new MenuItems(9, 'Laptops & Computers',[],'electronics'),
      new MenuItems(10, 'Televisions',[],'electronics'),
      new MenuItems(11, 'Audio Devices',[],'electronics'),
      new MenuItems(12, 'Cameras & Photography',[],'electronics')
    ]),
    new MenuItems(13, 'Books', [
      new MenuItems(14, 'Fiction',[],'books'),
      new MenuItems(15, 'Non-fiction',[],'books'),
      new MenuItems(16, 'Children\'s Books',[],'books'),
      new MenuItems(17, 'Best Sellers', [], 'books'),
      new MenuItems(18, 'Self-help & Motivation',[],'books')
    ]),
    new MenuItems(19, 'Kitchen Ware', [
      new MenuItems(20, 'Cookware',[],'kitchen-ware'),
      new MenuItems(21, 'Bakeware',[],'kitchen-ware'),
      new MenuItems(22, 'Small Appliances',[],'kitchen-ware'),
      new MenuItems(23, 'Cutlery & Utensils',[],'kitchen-ware'),
      new MenuItems(24, 'Storage & Organization',[],'kitchen-ware')
    ])
  ]


  getMenuItem(){
    return this.menuItem.slice()
  }

  constructor() { }
}
