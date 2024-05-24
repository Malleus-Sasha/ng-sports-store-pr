import { Injectable, signal } from '@angular/core';
import { ProductDataService } from '../data/product-data.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsS = signal([]);

  constructor(
    private dataService: ProductDataService,
  ) { }

  getProducts() {
    return this.dataService.getProducts().pipe(map((d) => d.products));
  }

  addProduct() {
    // this.dataService.add
  }

}
