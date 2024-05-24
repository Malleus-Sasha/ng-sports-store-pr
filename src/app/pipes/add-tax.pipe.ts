import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTax'
})
export class AddTaxPipe implements PipeTransform {
  defaultRate: number = 10;

  transform(value: any, rate?: any): number {
    let valueNumber = Number.parseFloat(value);
    let rateNumber = rate ? Number.parseInt(rate) : this.defaultRate;
    return valueNumber + (valueNumber * (rateNumber / 100));
  }

}
