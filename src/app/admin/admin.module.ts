import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent
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
