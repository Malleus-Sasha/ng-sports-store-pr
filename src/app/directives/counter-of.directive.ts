import { NgForOfContext } from '@angular/common';
import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCounterOf]'
})
export class CounterOfDirective implements OnChanges {

  constructor(
    private templateRef: TemplateRef<Object>,
    private containerRef: ViewContainerRef,
  ) {
    console.log('appCounterOf', this.counter);
   }

  @Input('appCounterOf') counter!: number[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('appCounterOf:OnChng:', this.counter);

    this.containerRef.clear();
    this.counter.forEach((i) => {
      console.log(':D:Context', new CounterDirectiveContext(i))
      this.containerRef.createEmbeddedView(
        this.templateRef,
        new CounterDirectiveContext(i));
    })
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}
