import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExmplsRoutingModule } from './exmpls-routing.module';
import { ExmplsComponent } from './exmpls.component';
import { FirstExmplComponent } from './first-exmpl/first-exmpl.component';
import { CategoryComponent } from './first-exmpl/category/category.component';
import { PaAttrDirective } from '../../directives/pa-attr.directive';
import { FormsModule } from '@angular/forms';
import { AppIfDirective } from '../../directives/app-if.directive';


@NgModule({
  declarations: [
    ExmplsComponent,
    FirstExmplComponent,
    CategoryComponent,
    PaAttrDirective,
    AppIfDirective,
  ],
  imports: [
    CommonModule,
    ExmplsRoutingModule,
    FormsModule,
  ]
})
export class ExmplsModule { }
