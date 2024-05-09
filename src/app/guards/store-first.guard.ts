import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { StoreComponent } from '../store/store/store.component';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class StoreFirstGuard implements CanActivate {
  firstNavigation = true;
  router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != StoreComponent) {
        console.log('firstNavigation: ', this.firstNavigation);
        this.router.navigateByUrl("/");
        return false;
      }
    }
    return true;
  }
}
