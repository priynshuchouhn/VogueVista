import { Component } from '@angular/core';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sideMenuService: SideMenuService){}
  userLogined:boolean = false;
  authPage: boolean = false

  toggleSideMenu(){
    this.sideMenuService.sideMenuCollapsed = !this.sideMenuService.sideMenuCollapsed
  }
}
