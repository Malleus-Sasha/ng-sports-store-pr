import { Component } from "@angular/core";
import { Product } from "../../../../model/product.model";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-products",
  templateUrl: "products.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductsComponent {
  products: Product[] = [];
  selectedProduct: string = "(None)";
  showTable = true;
  loading = true;

  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    const d = this.productsService.getProducts().subscribe((d) => {
      this.products = d;
      this.loading = false;
      console.log(":D: ", d);
    });
  }

  getSeleted(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  getTrakBy(i: number, d: Product) {
    return d.name;
  }

  getCategories() {}
}
