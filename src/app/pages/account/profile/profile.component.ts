import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  username: string = 'User'

  constructor(private userService: UserService, private sharedService: SharedService){}
  ngOnInit(): void {
   this.username = this.sharedService.userData.username
  }

  logoutClick(){
    this.userService.logout();
  }

}
