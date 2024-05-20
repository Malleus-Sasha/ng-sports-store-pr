import { Component } from '@angular/core';

@Component({
  selector: 'app-exmpls',
  template: `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" routerLink="/store"><i class="fa fa-arrow-circle-left"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" routerLink="first-exmpl">first-exmpl</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>

    <!-- <div class="nav-bar">
      <a routerLink="/store"><i class="fa fa-arrow-circle-left"></i>store</a>
      <a routerLink="first-exmpl">exmpl-first</a>
    </div>
    <p>
      exmpls works!
    </p> -->
    <router-outlet></router-outlet>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class ExmplsComponent {

}
