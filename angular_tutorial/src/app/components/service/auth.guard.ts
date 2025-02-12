import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loggedUser = localStorage.getItem('loginUser');
  const router = inject(Router);
  if(loggedUser != null){
    return true;
  }
  else{
    router.navigateByUrl('login');
    return false;
  }
};
