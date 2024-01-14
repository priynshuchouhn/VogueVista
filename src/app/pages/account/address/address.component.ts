import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/shared/model/user/address.model';
import { AddressService } from 'src/app/shared/services/user/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  isSubmitted: boolean = false

  addressForm: FormGroup
  constructor(private addressService: AddressService) {
    this.addressForm = new FormGroup({
      'addressType': new FormControl('Home', Validators.required),
      'isDefault': new FormControl(true, Validators.required),
      'name': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'address_line_1': new FormControl(null, Validators.required),
      'address_line_2': new FormControl(null),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'pincode': new FormControl(null, Validators.required),
    })
  }
  async ngOnInit() {
    this.getAddresses()
  }

  lstAddress: Address[] = []

  async getAddresses(){
    try {
      this.lstAddress = await this.addressService.getAddress() as Address[];
    } catch (error) {
      console.log(error);
    }
  }

  async onAddressAdd() {
    this.isSubmitted = true
    console.log(this.addressForm.value);
    if (this.addressForm.invalid) {
      return;
    }
    const value = this.addressForm.value
    const body = {
      'isDefault': value['isDefault'],
      'addressType': value['addressType'],
      'name': value['name'],
      'phone': value['phone'],
      'addressLine1': value['address_line_1'],
      'addressLine2': value['address_line_2'],
      'city': value['city'],
      'state': value['state'],
      'pincode': value['pincode'],
    }
    const address = await this.addressService.addAddress(body);
    if(address){
      this.addressForm.reset();
      this.getAddresses();
    }

  }



}
