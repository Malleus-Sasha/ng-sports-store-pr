import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store/store.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DiscountService } from 'services/discount.service';
import { DiscountPipe } from './pipes/discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
  ],
  providers: [
    DiscountService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
