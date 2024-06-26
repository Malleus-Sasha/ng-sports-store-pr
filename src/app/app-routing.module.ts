import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreComponent } from './store/store/store.component';
import { StoreFirstGuard } from './guards/store-first.guard';
import { NotFoundComponent } from './modules/exmpls/first-exmpl/not-found/not-found.component';

// ng g m modules/exmpls --routing --route exmpls --module app

const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
  { path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard] },
  { path: 'pageNotFound', component: NotFoundPageComponent },
  // { path: 'pageNotFound', component: NotFoundComponent },
  { 
    // outlet: 'center',
    path: 'admin',
    // canMatch: [LoadGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  { path: 'exmpls', loadChildren: () => import('./modules/exmpls/exmpls.module').then(m => m.ExmplsModule) },
  // { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: '**', redirectTo: 'pageNotFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
