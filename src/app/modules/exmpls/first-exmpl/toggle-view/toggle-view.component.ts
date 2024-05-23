import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-view',
  template: `
    <div class="checkbox">
      <label>
        <input type="checkbox" checked [(ngModel)]="showTable">
        Show Table
      </label>
      <ng-template [appIf]="showTable">
        <b> : SHOW TEMPLATE</b>
      </ng-template>
      <ng-content *ngIf="showTable"></ng-content>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class ToggleViewComponent {
  showTable = true;

}
