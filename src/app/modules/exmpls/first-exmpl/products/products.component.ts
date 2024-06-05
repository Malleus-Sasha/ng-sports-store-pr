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
import { ActivatedRoute } from "@angular/router";
import { HighlightTrigger } from "../../../../animations/products.animations";

@Component({
  selector: "app-products",
  templateUrl: "products.component.html",
  styles: `
    :host {
      display: block;
    }
    .card { position: relative }
  `,
  animations: [HighlightTrigger],
})
export class ProductsComponent implements OnInit, OnChanges {
  taxRate: any = 0;
  products: Product[] = [];
  selectedProduct: string = "(None)";
  showTable = true;
  loading = true;
  categoryFilter = "";
  category = '';
  categories: string[] = [];
  // appPaAttr
  // discounter = new DiscountService();
  @ViewChildren(CellColorDirective)
  viewChildren!: QueryList<CellColorDirective>;

  constructor(
    public productsService: ProductsService,
    private activeRoute: ActivatedRoute,
    private stateModelService: StateModelService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.category = params['category'] || '';
    })
    this.getProducts();
    this.getCategories();
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
    this.productsService.getProducts().subscribe((d) => {
      this.products = d.filter((p) => this.category == '' || this.category == p.category);
      this.loading = false;
      // console.log(":D: ", d);
      this.updateViewChildren();
    });
  }

  getSeleted(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  getTrakBy(i: number, d: Product) {
    return d.name;
  }

  getCategories() {
    return this.productsService.getProducts().subscribe((data) => {
      this.categories = data
        .map(p => p.category)
        .filter((category, index, array) => array.indexOf(category) == index) as string[];
    })
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id);
  }

  editProduct(id: number) {
    console.log("-EDIT-: ", id);
    // this.stateModelService.event.next({mode: MODES.EDIT, id})
  }

  createProduct() {}

  addProduct(arg0: any) {
    throw new Error("Method not implemented.");
  }

  highlightCategory: string = '';

  getRowState(category=''): string {
    return this.highlightCategory == '' ? '' :
      this.highlightCategory == category ? 'selected' : 'notselected';
  }
}
