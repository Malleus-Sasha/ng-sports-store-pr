import { Injectable } from "@angular/core";
import { CartService } from "../services/cart.service";

@Injectable()
export class Order {
  public id: number | null = null;
  public name = 'N1';
  public address = 'Add1';
  public city = 'C1';
  public state = 'St1';
  public zip = '112214';
  public country = 'Uk1';
  public shipped: boolean = false;

  constructor(public cart: CartService) {}

  clear() {
    this.id = null;
    this.name = 'N2'
    this.address = 'Add2'
    this.city = 'C2';
    this.state = 'St2'
    this.zip = '2233'
    this.country = 'Uk2';
    this.shipped = false;
    this.cart.clear();
  }
}
