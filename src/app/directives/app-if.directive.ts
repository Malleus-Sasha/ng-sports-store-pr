import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class AppIfDirective implements OnChanges {
  @Input('appIf') expressionResult!: boolean;

  constructor(
    private templateRef: TemplateRef<Object>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['expressionResult'];
    // console.log(':AppIF:', this.viewContainerRef);
    if (!change.isFirstChange() && !change.currentValue) {
      this.viewContainerRef.clear();
    } else if (change.currentValue) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
