import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  innerWidth: number = 0
  page: string = ''
  constructor( private router: Router, @Inject(PLATFORM_ID) private platformId:any){
    this.page = this.router.url.split('/')[3]
  }
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.innerWidth = window.innerWidth
      if (this.innerWidth <= 768) {
        this.router.navigate(['account/m/',this.page])
      } else {
        this.router.navigate(['account/',this.page])
      }
    }
  }

}
