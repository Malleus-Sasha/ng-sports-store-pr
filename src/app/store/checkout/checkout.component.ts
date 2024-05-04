import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
    <div><h3 class="bg-info p-a-1">Checkout Component</h3></div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class CheckoutComponent {

}
