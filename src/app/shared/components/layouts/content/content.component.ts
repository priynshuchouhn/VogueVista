import { Component } from '@angular/core';
import { SideMenuService } from 'src/app/shared/services/side-menu.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(public sideMenuService: SideMenuService){}

}
