import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-success pa-1 text-xs-center">
      This is SportsStore
    </div>
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-sports-store-pr1';
}
