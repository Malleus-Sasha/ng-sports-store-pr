import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product.model';
import { Order } from '../model/order.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable(
  // { providedIn: 'root' }
)
export class RestService {
  baseUrl = '';
  auth_token = '';

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

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<{success: boolean, token: string}>(
      this.baseUrl + 'login', 
      {
        name: user,
        password: pass,
      }
    ).pipe(
      map((res) => {
        this.auth_token = res.success ? res.token : '';
        return res.success;
      })
    )
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }
}
