import { Injectable, EventEmitter, Output } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FakeAuthService {

  @Output() status: BehaviorSubject<boolean> = new BehaviorSubject(false);
  state: boolean;

  constructor() {}

  logIn(user: string) {
    localStorage.setItem('token', user);
    this.state = true;
    this.status.next(this.state);
  }

  logOut() {
    localStorage.removeItem('token');
    this.state = false;
    this.status.next(this.state);
  }

  currentUser() {
    return localStorage.getItem('token');
  }

  init() {
    this.state = isDefined(localStorage.getItem('token'));
    this.status.next(this.state);
  }

  // public isAuthenticated(): Observable<boolean> {

  //   const current = new Observable<boolean>((observer) => {
  //     observer.next(this.status);
  //   }
  //   );
  //   return current;
  // }
}
