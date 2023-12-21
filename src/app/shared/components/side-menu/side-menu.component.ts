import { Component } from '@angular/core';
import { SideMenuService } from '../../services/side-menu.service';
import { MenuItems } from '../../model/menu.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  menuItem: MenuItems[]

  constructor(private sideMenuService: SideMenuService){
    this.menuItem = this.sideMenuService.getMenuItem();
    // console.log(this.menuItem)

  }


  closeSideMenu(){
    this.sideMenuService.sideMenuCollapsed = false
  }

}
