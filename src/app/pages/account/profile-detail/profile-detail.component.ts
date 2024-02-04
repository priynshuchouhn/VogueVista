import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css'
})
export class ProfileDetailComponent implements OnInit {
  profileDetail: FormGroup
  isSubmitted: Boolean = false

  constructor(private sharedService: SharedService) {
    this.profileDetail = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      gender: new FormControl(null,Validators.required)

    })
  }
  ngOnInit(): void {
    this.profileDetail.patchValue({
      username: this.sharedService.userData.username,
      email: this.sharedService.userData.email,
    })
  }

  onSubmit() {
    this.isSubmitted = true
    if (this.profileDetail.invalid) {
      return;
    }
  }

}
