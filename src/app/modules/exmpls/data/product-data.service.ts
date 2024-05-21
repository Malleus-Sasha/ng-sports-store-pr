import { Injectable } from '@angular/core';
import { ProductsData } from './products.data';
import { Observable, delay, from, of } from 'rxjs';
import { Product } from '../../../model/product.model';

type ProductData = {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor() { }

  getProducts(): Observable<ProductData> {
    return of(ProductsData).pipe(
      delay(1000)
    );
  }
}
