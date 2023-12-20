import { Component } from '@angular/core';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  constructor(private sideMenuService: SideMenuService){

  }

  menuItem = [
    'Fashion', 'Electronics', 'Books', 'Kitchen Ware'
  ]

  closeSideMenu(){
    this.sideMenuService.sideMenuCollapsed = false
  }

}
