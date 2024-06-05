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
import { DiscountPipe } from '../../pipes/discount.pipe';
import { MessageModule } from '../message/message.module';
import { StateModelService } from './model/state.model.service';
import { DataRestService } from './services/rest/data.rest';
import { ProductsService } from './services/products.service';
import { SecondExmplComponent } from './second-exmpl/second-exmpl.component';
import { CategoryCountComponent } from './first-exmpl/category-count/category-count.component';
import { ProductCountComponent } from './first-exmpl/product-count/product-count.component';
import { NotFoundComponent } from './first-exmpl/not-found/not-found.component';
import { TermsGuard } from '../../guards/terms.guard';

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
    SecondExmplComponent,
    ProductCountComponent,
    CategoryCountComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ExmplsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  providers: [
    // DiscountService,
    StateModelService,
    ProductsService,
    DataRestService,
    TermsGuard,
    { provide: 'REST_URL', useValue: `//${location.hostname}:3500/products`}
  ]
})
export class ExmplsModule { }
