import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExmplsRoutingModule } from './exmpls-routing.module';
import { ExmplsComponent } from './exmpls.component';
import { FirstExmplComponent } from './first-exmpl/first-exmpl.component';
import { CategoryComponent } from './first-exmpl/category/category.component';
import { PaAttrDirective } from '../../directives/pa-attr.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppIfDirective } from '../../directives/app-if.directive';
import { ProductsComponent } from './first-exmpl/products/products.component';
import { ProductFormComponent } from './first-exmpl/product-form/product-form.component';
import { ToggleViewComponent } from './first-exmpl/toggle-view/toggle-view.component';
import { CellColorDirective } from '../../directives/cell-color.directive';
import { AddTaxPipe } from '../../pipes/add-tax.pipe';
import { CategoryFilterPipe } from '../../pipes/category-filter.pipe';
import { DiscountDisplayComponent } from './first-exmpl/discount-display/discount-display.component';
import { DiscountEditorComponent } from './first-exmpl/discount-editor/discount-editor.component';
import { DiscountService } from 'services/discount.service';
import { DiscountPipe } from '../../pipes/discount.pipe';


@NgModule({
  declarations: [
    ExmplsComponent,
    FirstExmplComponent,
    CategoryComponent,
    PaAttrDirective,
    AppIfDirective,
    ProductsComponent,
    ProductFormComponent,
    ToggleViewComponent,
    CellColorDirective,
    AddTaxPipe,
    CategoryFilterPipe,
    DiscountDisplayComponent,
    DiscountEditorComponent,
    DiscountPipe,
  ],
  imports: [
    CommonModule,
    ExmplsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  // providers: {
    // DiscountService
  // }
})
export class ExmplsModule { }
