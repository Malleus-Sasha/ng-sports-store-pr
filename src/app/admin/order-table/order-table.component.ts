import { Component } from "@angular/core";
import { OrderRepository } from "../../model/order.repository";
import { Order } from "../../model/order.model";

@Component({
  selector: "app-order-table",
  templateUrl: "order-table.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
})
export class OrderTableComponent {
  includeShipped = false;

  constructor(private repository: OrderRepository) {}

  getOrders(): Order[] {
    return this.repository
      .getOrders()
      .filter((o) => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number | null) {
    if(id) this.repository.deleteOrder(id);
  }

  // Test
  upOrders() {
    console.log(':UP:ORDERS:', this.repository.getOrders());
  }
}
