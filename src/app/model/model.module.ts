import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { CartService } from "../services/cart.service";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestService } from "../services/rest.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    CartService,
    Order,
    OrderRepository,
    // StaticDataSource,
    { provide: StaticDataSource, useClass: RestService },
  ]
})
export class ModelModule {}
