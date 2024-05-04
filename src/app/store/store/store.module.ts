import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { ModelModule } from "../../model/model.module";
import { StoreComponent } from "./store.component";
import { CommonModule } from "@angular/common";
import { CounterOfDirective } from "../../directives/counter-of.directive";
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";
import { CartDetailComponent } from "../cart-detail/cart-detail.component";
import { CheckoutComponent } from "../checkout/checkout.component";
import { NotFoundPageComponent } from "../../components/not-found-page/not-found-page.component";

@NgModule({
  imports: [ModelModule, FormsModule, CommonModule],
  declarations: [
    CounterOfDirective, 
    StoreComponent,
    CheckoutComponent,
    CartDetailComponent,
    CartSummaryComponent,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
