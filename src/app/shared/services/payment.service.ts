import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../API/API';
import { PaymentIntent } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(API.CREATE_PAYMENT_INTENT, {amount : amount},{
      headers: {
        'Authorization': `Bearer ${this.sharedService.userData.token}`
      }
    });
  }

  constructor(private http: HttpClient, private sharedService: SharedService) { }
}
