import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExmplsRoutingModule } from './exmpls-routing.module';
import { ExmplsComponent } from './exmpls.component';
import { FirstExmplComponent } from './first-exmpl/first-exmpl.component';


@NgModule({
  declarations: [
    ExmplsComponent,
    FirstExmplComponent
  ],
  imports: [
    CommonModule,
    ExmplsRoutingModule
  ]
})
export class ExmplsModule { }
