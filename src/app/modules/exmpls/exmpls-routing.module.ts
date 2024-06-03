import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExmplsComponent } from './exmpls.component';
import { FirstExmplComponent } from './first-exmpl/first-exmpl.component';
import { SecondExmplComponent } from './second-exmpl/second-exmpl.component';
import { Product } from '../../model/product.model';
import { ProductFormComponent } from './first-exmpl/product-form/product-form.component';
import { NotFoundComponent } from './first-exmpl/not-found/not-found.component';
import { ProductsComponent } from './first-exmpl/products/products.component';

const routes: Routes = [
  { 
    path: '',
    component: ExmplsComponent, 
    children: [
      { path: 'first-exmpl', component: FirstExmplComponent },
      { path: 'first-exmpl/form/:mode/:id', component: ProductFormComponent },
      { path: 'first-exmpl/form/:mode', component: ProductFormComponent },

      { path: 'second-exmpl', component: SecondExmplComponent },

      { path: 'exmpls/does', redirectTo: 'first-exmpl/form/create', pathMatch: 'prefix' },
      { path: 'table', component: ProductsComponent },
      // '/exmpls'
      // { path: '', component: FirstExmplComponent },
      // { path: '', redirectTo: '/table', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ], 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExmplsRoutingModule { }
