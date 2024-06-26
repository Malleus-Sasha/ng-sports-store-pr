import { Component } from "@angular/core";
import { ProductRepository } from "../../model/product.repository";
import { Product } from "../../model/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-product-editor",
  templateUrl: "product-editor.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product(0);

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activeRoute.snapshot.params["id"])
      );
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
