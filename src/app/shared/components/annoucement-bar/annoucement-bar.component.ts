import { Component } from '@angular/core';

@Component({
  selector: 'app-annoucement-bar',
  templateUrl: './annoucement-bar.component.html',
  styleUrls: ['./annoucement-bar.component.css']
})
export class AnnoucementBarComponent {

  lstLanguage = [
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
    { name: 'Chinese', code: 'zh' },
    { name: 'Japanese', code: 'ja' },
    { name: 'Korean', code: 'ko' },
    { name: 'Arabic', code: 'ar' },
    { name: 'Russian', code: 'ru' },
  ]

  lstCurrency = [
    { name: 'Indian Rupee', code: 'INR' },
    { name: 'US Dollar', code: 'USD' },
    { name: 'Euro', code: 'EUR' },
    { name: 'British Pound', code: 'GBP' },
    { name: 'Japanese Yen', code: 'JPY' },
    { name: 'Chinese Yuan', code: 'CNY' },
  ]

}
