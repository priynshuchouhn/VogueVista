import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-web',
  templateUrl: './account-web.component.html',
  styleUrl: './account-web.component.css'
})
export class AccountWebComponent implements OnInit {
  innerWidth: number = 0
  page: string = ''
  constructor(private route: ActivatedRoute, private router: Router){
    this.page = this.router.url.split('/')[2]
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth
    if (this.innerWidth <= 768) {
      this.router.navigate(['account/m/'])
    } else {
      this.router.navigate(['account/',this.page])
    }
  }

}
