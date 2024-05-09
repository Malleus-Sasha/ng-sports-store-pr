import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { OrderTableComponent } from './order-table/order-table.component';

@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    OrderTableComponent,
    ProductTableComponent,
    ProductEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [
    // AuthService,
  ]
})
export class AdminModule { }
