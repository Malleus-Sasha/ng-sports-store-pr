import { Component, Input } from '@angular/core';
import { DiscountService } from 'services/discount.service';

@Component({
  selector: 'app-discount-editor',
  template: `
    <div class="form-group">
      <label>
        Discount
        <input type="number" [(ngModel)]="discounter.discount">
      </label>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class DiscountEditorComponent {
  @Input() discounter!: DiscountService;
}
