import { Component } from '@angular/core';
import { HighlightTrigger } from './animations/products.animations';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet />
  `,
  styles: [],
  animations:[HighlightTrigger]
})
export class AppComponent {}
