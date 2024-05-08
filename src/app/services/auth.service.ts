import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable(
  // { providedIn: 'root' }
)
export class AuthService {

  constructor(private dataSource: RestService) { }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.dataSource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.dataSource.auth_token != '';
  }

  clear() {
    this.dataSource.auth_token = '';
  }
}
