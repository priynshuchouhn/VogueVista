import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  innerWidth: number = 0
  page: string = ''
  constructor( private router: Router){
    this.page = this.router.url.split('/')[3]
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth
    if (this.innerWidth <= 768) {
      this.router.navigate(['account/m/',this.page])
    } else {
      this.router.navigate(['account/',this.page])
    }
  }

}
