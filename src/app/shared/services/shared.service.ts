import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'an error occured';
          if (!errorRes.error || !errorRes.error.message) {
            return throwError(()=> errorMessage);
          }
          switch (errorRes.status) {
            case 404:
              errorMessage = errorRes.error.message;
              break;
              case 401:  
                errorMessage = 'Unauthorised';
                break;
              case 500:  
                errorMessage = 'Internal Server Error';
                break;
          }
          return throwError(()=> errorMessage);
  }


  constructor() { }
}
