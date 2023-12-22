import { Component } from '@angular/core';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public sideMenuService: SideMenuService){}
  userLogined:boolean = false;
  authPage: boolean = false

  toggleSideMenu(){
    this.sideMenuService.sideMenuCollapsed = !this.sideMenuService.sideMenuCollapsed
  }
  
  toggleSearch(){
    this.sideMenuService.searchCollapsed = !this.sideMenuService.searchCollapsed
  }
}
