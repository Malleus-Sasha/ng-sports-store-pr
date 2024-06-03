import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExmplsComponent } from './exmpls.component';
import { FirstExmplComponent } from './first-exmpl/first-exmpl.component';
import { SecondExmplComponent } from './second-exmpl/second-exmpl.component';
import { Product } from '../../model/product.model';
import { ProductFormComponent } from './first-exmpl/product-form/product-form.component';
import { NotFoundComponent } from './first-exmpl/not-found/not-found.component';
import { ProductsComponent } from './first-exmpl/products/products.component';
import { ProductCountComponent } from './first-exmpl/product-count/product-count.component';
import { CategoryCountComponent } from './first-exmpl/category-count/category-count.component';
import { dataResolver } from '../../guards/data.resolver';
import { TermsGuard } from '../../guards/terms.guard';

const routes: Routes = [


  { path: 'first-exmpl',
    component: ExmplsComponent, 
    // canActivateChild: [TermsGuard],
    children: [
      { path: 'products-count', component: ProductCountComponent },
      { path: 'category-count', component: CategoryCountComponent },

      { path: ':category', component: FirstExmplComponent },
      { path: '', component: FirstExmplComponent },
      
      { path: 'form/:mode/:id', component: ProductFormComponent, resolve: { model: dataResolver } },
      { 
        path: 'form/:mode', 
        component: ProductFormComponent, 
        resolve: { model: dataResolver },
        canActivate: [TermsGuard],
      },


      { path: 'exmpls/does', redirectTo: 'first-exmpl/form/create', pathMatch: 'prefix' },
      // '/exmpls'
      // { path: '', component: FirstExmplComponent },
      // { path: '', redirectTo: '/table', pathMatch: 'full' },
      { path: '', component: ExmplsComponent },
      // { path: '**', component: NotFoundComponent },
    ],
    resolve: { model: dataResolver },
  },


  { path: 'second-exmpl', component: SecondExmplComponent },
  { path: '', component: ExmplsComponent }, // ??? /first/fist
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExmplsRoutingModule { }
