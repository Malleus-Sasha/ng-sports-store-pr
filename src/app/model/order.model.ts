import { Injectable } from "@angular/core";
import { CartService } from "../services/cart.service";

@Injectable()
export class Order {
  public id: number | null = null;
  public name = 'N1';
  public address: string | null = null;
  public city: string | null = null;
  public state: string | null = null;
  public zip: string | null = null;
  public country!: string | null;
  public shipped: boolean = false;

  constructor(public cart: CartService) {}

  clear() {
    this.id = null;
    this.name = ''
    this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
