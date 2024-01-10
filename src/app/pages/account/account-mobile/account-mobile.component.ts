import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-account-mobile',
  templateUrl: './account-mobile.component.html',
  styleUrl: './account-mobile.component.css'
})
export class AccountMobileComponent {
  constructor(public userService: UserService){}

}
