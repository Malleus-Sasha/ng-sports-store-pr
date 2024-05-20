import { Injectable } from '@angular/core';
import { ProductDataService } from '../data/product-data.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private dataService: ProductDataService,
  ) { }

  getProducts() {
    return this.dataService.getProducts().pipe(map((d) => d.products));
  }

}
