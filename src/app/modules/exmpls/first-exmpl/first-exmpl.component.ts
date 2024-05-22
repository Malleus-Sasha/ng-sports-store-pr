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
  `
})
export class FirstExmplComponent {
  showTable = true;
}
