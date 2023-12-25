import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 const user = JSON.parse(sessionStorage.getItem('user')!) || JSON.parse(localStorage.getItem('user')!) || null
  if(!user){
    return inject(Router).createUrlTree(['/login']);;
  }
  return true;
};
