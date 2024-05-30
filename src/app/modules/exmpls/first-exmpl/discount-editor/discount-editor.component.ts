import { Component, Input, inject } from '@angular/core';
import { DiscountService } from 'services/discount.service';

@Component({
  selector: 'app-discount-editor',
  template: `

      <label>
        Discount
        <input type="number" [(ngModel)]="discounter.discount">
      </label>

  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class DiscountEditorComponent {
  discounter = inject(DiscountService);
}
