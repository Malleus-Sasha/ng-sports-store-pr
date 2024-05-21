import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-first-exmpl',
  templateUrl: 'first-exmpl.component.html',
  styles: `
    :host {
      display: block;
    }
    input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }
    input.ng-dirty.ng-valid { border: 2px solid #6bc502 }
  `
})
export class FirstExmplComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: string = '(None)';
  showTable = true;

  constructor(
    public productsService: ProductsService,
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    const d = this.productsService.getProducts().subscribe((d) => {
      this.products = d;
      console.log(':D: ', d);
    });
  }

  getSeleted(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  getTrakBy(i: number, d: Product) {
    return d.name;
  }

  getCategories() {

  }
}
