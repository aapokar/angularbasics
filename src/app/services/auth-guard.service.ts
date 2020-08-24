import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FakeAuthService } from './fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: FakeAuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.state) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
