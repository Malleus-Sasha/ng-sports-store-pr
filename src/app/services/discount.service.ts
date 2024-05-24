import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class DiscountService {
  private discountValue: number = 10;

  constructor() { }

  get discount(): number {
    return this.discountValue;
  }

  set discount(discount: number) {
    this.discountValue = discount;
  }

  applyDiscount(price: number) {
    return Math.max(price - this.discountValue, 5);
  }
}
