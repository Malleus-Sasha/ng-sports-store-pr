import { Component, Input, inject } from '@angular/core';
import { DiscountService } from 'services/discount.service';

@Component({
  selector: 'app-discount-display',
  template: `
    <span class="bg-infp p-1">
      The discount is {{ discounter.discount }}
    </span>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class DiscountDisplayComponent {
  
  discounter = inject(DiscountService);

}
