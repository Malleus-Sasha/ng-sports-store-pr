import { Component } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class StoreComponent {
  public selectedCategory: string = '';
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(
    private repository: ProductRepository,
    private cartService: CartService,
    private router: Router,
  ) {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: string) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(
      this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
        .fill(0).map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    this.cartService.addLine(product);
    this.router.navigateByUrl('/cart');
  }

  highlightCategory: string = '';

  // getRowState(category=''): string {
  //   return this.highlightCategory == '' ? '' :
  //     this.highlightCategory == category ? 'selected' : 'notselected';
  // }
} 
