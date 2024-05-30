import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExmplsComponent } from './exmpls.component';
import { FirstExmplComponent } from './first-exmpl/first-exmpl.component';
import { SecondExmplComponent } from './second-exmpl/second-exmpl.component';
import { Product } from '../../model/product.model';
import { ProductFormComponent } from './first-exmpl/product-form/product-form.component';

const routes: Routes = [
  { 
    path: '',
    component: ExmplsComponent, 
    children: [
      { path: 'first-exmpl', component: FirstExmplComponent },
      { path: 'first-exmpl/form/:mod/:id', component: ProductFormComponent },
      { path: 'first-exmpl/form/:mod', component: ProductFormComponent },

      { path: 'second-exmpl', component: SecondExmplComponent },
    ], 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExmplsRoutingModule { }
