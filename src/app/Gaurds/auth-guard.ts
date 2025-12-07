import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Login } from '../services/login';

export const authGuard: CanActivateFn = (route, state) => {

  let userService = inject(Login);
  let router = inject(Router);
  if (!userService.isLoggedIn) {
    alert("You are not allowed to access this page, please login first.");
    router.navigate(['/Login']);
    return false;
  }
  return true;
};
