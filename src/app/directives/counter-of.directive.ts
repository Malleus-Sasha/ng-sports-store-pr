import { NgForOfContext } from '@angular/common';
import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCounterOf]'
})
export class CounterOfDirective implements OnChanges {

  constructor(
    private templateRef: TemplateRef<Object>,
    private containerRef: ViewContainerRef,
  ) {}

  @Input('appCounterOf') counter!: number[];

  ngOnChanges(changes: SimpleChanges): void {
    this.containerRef.clear();
    this.counter.forEach((i) => {
      this.containerRef.createEmbeddedView(
        this.templateRef,
        new CounterDirectiveContext(i));
    })
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}
