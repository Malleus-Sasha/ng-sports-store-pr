import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";
import { RestService } from "../services/rest.service";


@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded = false;

  constructor(private dataSource: RestService) {}

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders()
        .subscribe(orders => this.orders = orders);
  }

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe(order => {
        this.orders.splice(this.orders.
            findIndex(o => o.id == order.id), 1, order);
    });
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe(order => {
        this.orders.splice(this.orders.findIndex(o => id == o.id), 1);
    });
  }
}