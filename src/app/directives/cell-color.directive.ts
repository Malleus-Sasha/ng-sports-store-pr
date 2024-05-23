import { Directive, HostBinding } from "@angular/core";


@Directive({
  selector: "div"
})
export class CellColorDirective {

  @HostBinding("class")
  bgClass: string = "";

  setColor(dark: Boolean) {
      this.bgClass = dark ? "bg-dark" : "";
  }
}
