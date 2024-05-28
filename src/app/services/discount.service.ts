import { Inject, Injectable } from '@angular/core';
import { LOG_SERVICE, LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private discountValue: number = 10;

  constructor(
    // @Inject(LOG_SERVICE) private logger: LogService,
    private logger: LogService,
  ) { }

  get discount(): number {
    return this.discountValue;
  }

  set discount(discount: number) {
    this.discountValue = discount;
  }

  applyDiscount(price: number) {
    this.logger.logInfoMessage(`Discount ${this.discount} applied to price: ${price}`);
    return Math.max(price - this.discountValue, 5);
  }
}
