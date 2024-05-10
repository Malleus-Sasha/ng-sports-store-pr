import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class AuthComponent {
  username: string = 'admin';
  password: string = 'secret';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password).subscribe((res) => {
        if (res) {
          this.router.navigateByUrl('/admin/main');
        }
        this.errorMessage = 'Authentication Failed';
      })
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }

}
