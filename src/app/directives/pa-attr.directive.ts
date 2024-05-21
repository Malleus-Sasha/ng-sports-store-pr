import {
  Attribute,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Product } from "../model/product.model";

@Directive({
  selector: "[appPaAttr]",
})
export class PaAttrDirective implements OnChanges, OnInit {
  @Input("pa-attr")
  @HostBinding("class")
  bgClass!: string;

  @Input("pa-product") product!: Product;

  @Output("pa-category") click = new EventEmitter<string>();

  @HostListener("click") triggerCustomEvent() {
      if (this.product != null) {
          this.click.emit(this.product.category);
      }
  }

  // ---
  // @Input("appPaAttr") bgClass = "";

  // @Input("pa-product") product!: Product;

  // @Output('pa-category') click = new EventEmitter<string>();

  constructor(
    // private element: ElementRef 
    // @Attribute('appPaAttr') bgClass: string,
  ) {
    // this.element.nativeElement.addEventListener("click", () => {
    //   if (this.product != null) {
    //     this.click.emit(this.product.category);
    //   }
    // });
  }

  ngOnInit(): void {
    console.log(":PaAttr:OnInit:");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(":Changes:", changes);
    // let change = changes["bgClass"];
    // let classList = this.element.nativeElement.classList;
    // if (!change.isFirstChange() && classList.contains(change.previousValue)) {
    //   classList.remove(change.previousValue);
    // }
    // if (!classList.contains(change.currentValue)) {
    //   classList.add(change.currentValue);
    // }
  }
}
