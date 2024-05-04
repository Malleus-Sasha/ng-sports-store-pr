import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `   
    <app-store />

    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-sports-store-pr1';
}
