import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  isSubmitted: boolean = false

  addressForm: FormGroup
  constructor() {
    this.addressForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'address_line_1': new FormControl(null, Validators.required),
      'address_line_2': new FormControl(null),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'pincode': new FormControl(null, Validators.required),
    })
  }

  lstAddress = Array(3).fill(0)

  onAddressAdd() {
    this.isSubmitted = true
    if (this.addressForm.invalid) {
      return;
    }
    const value = this.addressForm.value
    const body = {
      'name': value['name'],
      'phone': value['phone'],
      'address_line_1': value['address_line_1'],
      'address_line_2': value['address_line_2'],
      'city': value['city'],
      'state': value['state'],
      'pincode': value['pincode'],
    }
    
  }

}
