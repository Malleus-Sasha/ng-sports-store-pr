import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Product } from "../../../../model/product.model";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class DataRestService {
  // private url = '/localhost:3500/';

  constructor(
    private http: HttpClient,
    @Inject("REST_URL") private url: string
  ) {}

  /**
   *  @return: Observable<Product[]>
   */
  getProducts() {
    return this.http.get<Product[]>(`${this.url}`);
  }

  saveProduct(product: Product) {
    return this.http.post<Product>(this.url, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.url}/${id}`);
  }

  private sendRequest<T>(
    verb: string,
    url: string,
    body?: Product
  ): Observable<T> {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set("Access-Key", "<secret>");
    myHeaders = myHeaders.set("Application-Names", [
      "exampleApp",
      "proAngular",
    ]);

    return this.http
      .request<T>(verb, url, {
        body: body,
        headers: myHeaders,
      })
      .pipe(
        catchError((error: Response) =>
          throwError(`Network Error: ${error.statusText} (${error.status})`)
        )
      );
  }
}
