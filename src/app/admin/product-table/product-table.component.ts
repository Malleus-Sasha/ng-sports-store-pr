import { Component } from "@angular/core";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";

@Component({
  selector: "app-product-table",
  templateUrl: "product-table.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductTableComponent {
  constructor(private repository: ProductRepository) {}

  getProducts(): Product[] {
    return this.repository.getProducts('');
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
