import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  sideMenuCollapsed: boolean = false

  constructor() { }
}
