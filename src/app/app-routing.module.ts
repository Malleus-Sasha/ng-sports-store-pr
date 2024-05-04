import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreComponent } from './store/store/store.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'pageNotFound', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'pageNotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
