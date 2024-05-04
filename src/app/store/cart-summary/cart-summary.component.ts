import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  template: `
    <div class="float-right">
      <small>
        Your cart:
        <span *ngIf="cart.itemCount > 0">
          {{ cart.itemCount }} item(s)
          {{ cart.cartPrice | currency:"USD":"symbol":"2.2-2" }}
        </span>
        <span *ngIf="cart.itemCount == 0">
          (empty)
        </span>
      </small>
      <button class="btn btn-sm bg-dark text-white"
          [disabled]="cart.itemCount == 0" routerLink="/cart">
        <i class="fa fa-shopping-cart"></i>
      </button>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class CartSummaryComponent {
  constructor(public cart: CartService) {}
}
