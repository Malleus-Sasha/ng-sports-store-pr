import { ChangeDetectorRef, Component, KeyValueDiffer, KeyValueDiffers } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-product-count",
  template: ` <div class="bg-info p-2">There are {{count}} products</div>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProductCountComponent {
  private differ!: KeyValueDiffer<any, any>;
  count: number = 0;
  private category = '';

  constructor(
    private productsService: ProductsService,
    private keyValueDiffers: KeyValueDiffers,
    private changeDetector: ChangeDetectorRef,
    activeRoute: ActivatedRoute,
  ) {
    activeRoute.pathFromRoot.forEach((route) =>
      route.params.subscribe((params) => {
        console.log('/category-count/', params);
        if (params["category"] != null) {
          this.category = params["category"];
          this.updateCount();
        }
      })
    );
  }

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.productsService.getProducts()).create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.productsService.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.productsService
      .getData()
      .filter(
        (p) => this.category == null || p.category == this.category
      ).length;
  }
}
