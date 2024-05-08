import { Component } from '@angular/core';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.component.html',
  styles: `
    :host {
      display: block;
    }
    input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }
    input.ng-dirty.ng-valid { border: 2px solid #6bc502 }
  `
})
export class CheckoutComponent {
  orderSent = false;
  submitted = false;

  constructor(
    public repository: OrderRepository,
    public order: Order,
  ) {}

  submitOrder(form: any) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
