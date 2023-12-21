import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-web',
  templateUrl: './account-web.component.html',
  styleUrl: './account-web.component.css'
})
export class AccountWebComponent implements OnInit {
  innerWidth: number = 0
  page: string = ''
  constructor(private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID)private platformId:any){
    this.page = this.router.url.split('/')[2]
  }
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.innerWidth = window.innerWidth
      if (this.innerWidth <= 768) {
        this.router.navigate(['account/m/'])
      } else {
        this.router.navigate(['account/',this.page])
      }
    }
  }

}
