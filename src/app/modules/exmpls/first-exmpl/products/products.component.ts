import {
  Component,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from "@angular/core";
import { Product } from "../../../../model/product.model";
import { ProductsService } from "../../services/products.service";
import { PaAttrDirective } from "../../../../directives/pa-attr.directive";
import { CellColorDirective } from "../../../../directives/cell-color.directive";
import { DiscountService } from "services/discount.service";
import { MODES, StateModelService } from "../../model/state.model.service";

@Component({
  selector: "app-products",
  templateUrl: "products.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductsComponent implements OnInit, OnChanges {
  taxRate: any = 0;
  products: Product[] = [];
  selectedProduct: string = "(None)";
  showTable = true;
  loading = true;
  categoryFilter = "";
  // appPaAttr
  // discounter = new DiscountService();
  @ViewChildren(CellColorDirective)
  viewChildren!: QueryList<CellColorDirective>;

  constructor(
    public productsService: ProductsService,
    private stateModelService: StateModelService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.viewChildren.changes.subscribe(() => {
      this.updateViewChildren();
    });
    this.updateViewChildren();
  }

  private updateViewChildren() {
    // console.log(':CHILDREN:', this.viewChildren);
    // setTimeout(() => {
    //   this.viewChildren.forEach((child, index) => {
    //     child.setColor(index % 2 ? true : false);
    //   })
    // }, 200);
  }

  getProducts() {
    this.loading = true;
    const d = this.productsService.getProducts().subscribe((d) => {
      this.products = d;
      this.loading = false;
      console.log(":D: ", d);
      this.updateViewChildren();
    });
  }

  getSeleted(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  getTrakBy(i: number, d: Product) {
    return d.name;
  }

  getCategories() {}

  deleteProduct(arg0: any) {
    console.log("Method not implemented.");
  }

  editProduct(id: number) {
    console.log('-EDIT-: ', id);
    this.stateModelService.event.next({mode: MODES.EDIT, id})
  }

  addProduct(arg0: any) {
    throw new Error("Method not implemented.");
  }
}
