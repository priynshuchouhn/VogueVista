import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';
import { API } from '../../API/API';
import { lastValueFrom } from 'rxjs';
import { Address } from '../../model/user/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  fromJsonData(data: any) {
    const { addressId,
      userId,
      addressType,
      name,
      phone,
      addressLine1,
      city,
      state,
      pincode,
      isDefault } = data;

    const addressLine2 = data.addressLine2 ?? null;
    const tempAddress = new Address(
      addressId,
      userId,
      addressType,
      name,
      phone,
      addressLine1,
      city,
      state,
      pincode,
      isDefault,
      addressLine2
    )

    return tempAddress;
  }

  async getAddress() {
    try {
      const res = this.http.get(API.GET_ADDRESSES, {
        headers: {
          'Authorization': `Bearer ${this.sharedService.userData.token}`
        }
      });
      const data = await lastValueFrom(res);
      let lstAddress: Address[] = [];
      (data as any).data.forEach((address: any) => {
        const parsedAddress = this.fromJsonData(address);
        lstAddress.push(parsedAddress);
      });
      return lstAddress;
    } catch (error: any) {
      const err = this.sharedService.handleError(error);
      return null;
    }
  }

  async addAddress(address: any) {
    try {
      const res = this.http.post(API.ADD_ADDRESS, address, {
        headers: {
          'Authorization': `Bearer ${this.sharedService.userData.token}`
        }
      });
      const data = await lastValueFrom(res);
      let newAddress: Address = this.fromJsonData(data);
      return newAddress;
    } catch (error: any) {
      console.log(error);
      const err = this.sharedService.handleError(error);
      return null;
    }
  }

  constructor(private http: HttpClient, private sharedService: SharedService) { }
}
