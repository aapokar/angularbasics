import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../services/fake-auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  loggedIn: boolean;
  subsc: Subscription;
  title = 'Angular basics';
  user: string;

  constructor(private auth: FakeAuthService) {}

  ngOnInit() {
    this.loggedIn = this.auth.state;
    this.subsc = this.auth.status.subscribe(status => {
      this.loggedIn = status;
      this.user = this.auth.currentUser();
    }
    );
    if (this.loggedIn) {
      this.user = this.auth.currentUser();
    }
  }

  logOut() {
    this.auth.logOut();
  }

}
