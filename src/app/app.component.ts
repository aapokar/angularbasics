import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from './services/fake-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  topTitle: 'Angular basics';

  constructor(private auth: FakeAuthService) { }

  ngOnInit(): void {
    this.auth.init();
  }
}

