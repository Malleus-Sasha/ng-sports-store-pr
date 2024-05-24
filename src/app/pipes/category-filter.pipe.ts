import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'categoryFilter',
  pure: true,
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    return category ? products.filter((p) => p.category == category) : products;
  }
}
