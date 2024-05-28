import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store/store.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DiscountService } from 'services/discount.service';
import { LOG_SERVICE, LogLevel, LogService } from 'services/log.service';

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
    // LogService,
    // { provide: 'logger', useClass: LogService},
    // { provide: LOG_SERVICE, useClass: LogService, multi: true },
    // { 
    //   provide: LogService, useFactory: () => {
    //   let logger = new LogService();
    //   logger.minimumLevel = LogLevel.DEBUG;
    //   return logger;
    //   }
    // }
    // {
    //   provide: LogService,
    //   deps: ['debugLevel'],
    //   useFactory: (level) => {
    //     let logger = new LogService();
    //     logger.minimumLevel = level;
    //     return logger;
    //   }
    // },
    // {
    //   provide: LOG_LEVEL, useValue: LogLevel.ERROR,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
