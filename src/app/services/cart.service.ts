import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CartService {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  constructor() { }

  addLine(product: Product, quantity: number =1) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity))
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number | string) {
    let line = this.lines.find(line => line.product.id == product.id);
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number) {
    let index = this.lines.findIndex((line => line.product.id == id));
    this.lines.splice(index);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }


  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach((line) => {
      this.itemCount += line.quantity;
      this.cartPrice += (line.quantity * line.product.price!)
    })
  }
}

export class CartLine {

  constructor(
    public product: Product,
    public quantity: number,
  ) {}

  get lineTotal() {
    return this.quantity * this.product.price!;
  }
}
