import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: 'cart-detail.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class CartDetailComponent {
  constructor(public cart: CartService) {}
}
