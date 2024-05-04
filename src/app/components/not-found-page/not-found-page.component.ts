import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `
    <div>
      <h3 class="bg-info p-a-1">Not Found Page 404</h3>
      <a [routerLink]="['/store']">Go To Store</a>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class NotFoundPageComponent {}
