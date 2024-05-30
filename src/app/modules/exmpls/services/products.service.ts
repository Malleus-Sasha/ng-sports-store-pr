import { Injectable, signal } from "@angular/core";
import { ProductDataService } from "../data/product-data.service";
import { map, tap } from "rxjs";
import { Product } from "../../../model/product.model";
import { DataRestService } from "./rest/data.rest";

@Injectable()
// {  providedIn: "root", }
export class ProductsService {
  productsS = signal([]);
  private products: Product[] = [];
  private locator = (p: Product, id: number) => p.id == id;

  constructor(
    // private dataService: ProductDataService,
    private dataService: DataRestService
  ) {}

  getProducts() {
    return this.dataService.getProducts().pipe(
      // map((d) => d.products),
      tap((p) => {
        console.log(":P:", p);
        this.products = p;
      })
    );
  }

  getProduct(id: number) {
    return this.products.find((p) => this.locator(p, id));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      // product.id = this.generateID();
      this.dataService
        .saveProduct(product)
        .subscribe((product) => this.products.push(product));
      // this.products.push(product);
    } else {
      this.dataService.updateProduct(product).subscribe((p) => {
        let index = this.products.findIndex((p) => this.locator(p, product.id));
        this.products.splice(index, 1, product);
      });
    }
  }

  deleteProduct(id: number) {
    this.dataService.deleteProduct(id).subscribe(() => {
      let index = this.products.findIndex((p) => this.locator(p, id));
      if (index > -1) {
        this.products.splice(index, 1);
      }
    });
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
