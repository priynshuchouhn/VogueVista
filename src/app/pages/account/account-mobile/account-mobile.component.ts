import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-account-mobile',
  templateUrl: './account-mobile.component.html',
  styleUrl: './account-mobile.component.css'
})
export class AccountMobileComponent implements OnInit {
  username: string = 'User'
  constructor(public userService: UserService, private sharedService: SharedService){}
  ngOnInit(): void {
    this.username = this.sharedService.userData.username
  }

}
