import { CanActivateFn, Router } from '@angular/router';
import { StoreComponent } from '../store/store/store.component';
import { inject } from '@angular/core';

export const storeFirstGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let firstNavigation = true;

  if (firstNavigation) {
    firstNavigation = false;
    if (route.component != StoreComponent) {
      console.log('firstNavigation: ', firstNavigation);
      // router.navigateByUrl("/");
      // return false;
    }
  }
  return true;
};
