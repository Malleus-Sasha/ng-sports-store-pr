import { Pipe, PipeTransform, inject } from '@angular/core';
import { DiscountService } from 'services/discount.service';

@Pipe({
  name: 'discount',
  pure: false,
})
export class DiscountPipe implements PipeTransform {
  discount = inject(DiscountService);

  transform(price: any): number {
    return this.discount.applyDiscount(price);
  }

}
