import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { Order } from '../model/order.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable(
  // { providedIn: 'root' }
)
export class RestService {
  baseUrl = '';

  constructor(
    private http: HttpClient
  ) { 
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products`);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}orders`, order);
  }
}
