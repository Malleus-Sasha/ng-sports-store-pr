import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Product } from "../model/product.model";
import { Order } from "../model/order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
// { providedIn: 'root' }
export class RestService {
  baseUrl = "";
  auth_token = "";

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products`);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}orders`, order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http
      .post<{ success: boolean; token: string }>(this.baseUrl + "login", {
        name: user,
        password: pass,
      })
      .pipe(
        map((res) => {
          this.auth_token = res.success ? res.token : "";
          return res.success;
        })
      );
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.baseUrl + "products",
      product,
      this.getOptions()
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}products/${product.id}`,
      product,
      this.getOptions()
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      `${this.baseUrl}products/${id}`,
      this.getOptions()
    );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(
      `${this.baseUrl}orders/${id}`,
      this.getOptions()
    );
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(
      `${this.baseUrl}orders/${order.id}`,
      order,
      this.getOptions()
    );
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.auth_token}>`,
      }),
    };
  }
}
