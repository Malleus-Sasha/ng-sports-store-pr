import { ChangeDetectorRef, Component, KeyValueDiffer, KeyValueDiffers } from "@angular/core";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-category-count",
  template: ` <div class="bg-primary p-a-1">There are {{count}} categories</div> `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CategoryCountComponent {
  private differ!: KeyValueDiffer<any, any>;
  count: number = 0;

  constructor(
    private model: ProductsService,
    private keyValueDiffers: KeyValueDiffers,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.count = this.model
        .getData()
        .map((p) => p.category)
        .filter(
          (category, index, array) => array.indexOf(category) == index
        ).length;
    }
  }
}
