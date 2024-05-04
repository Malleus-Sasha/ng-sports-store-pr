import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { ModelModule } from "../../model/model.module";
import { StoreComponent } from "./store.component";
import { CommonModule } from "@angular/common";
import { CounterOfDirective } from "../../directives/counter-of.directive";

@NgModule({
  imports: [ModelModule, FormsModule, CommonModule],
  declarations: [StoreComponent, CounterOfDirective],
  exports: [StoreComponent],
})
export class StoreModule {}
