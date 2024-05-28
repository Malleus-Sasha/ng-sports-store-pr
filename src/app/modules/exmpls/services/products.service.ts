import { Injectable, signal } from "@angular/core";
import { ProductDataService } from "../data/product-data.service";
import { map, tap } from "rxjs";
import { Product } from "../../../model/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  productsS = signal([]);
  private products: Product[] = [];
  private locator = (p: Product, id: number) => p.id == id;

  constructor(private dataService: ProductDataService) {}

  getProducts() {
    return this.dataService.getProducts().pipe(
      map((d) => d.products),
      tap((p) => this.products = p),
    );
  }

  getProduct(id: number) {
    return this.products.find(p => this.locator(p, id));
  }

  addProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      let index = this.products.findIndex((p) => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
