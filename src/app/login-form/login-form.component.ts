import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FakeAuthService } from '../services/fake-auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl(''),
  });
  loggedIn: boolean;
  subsc: Subscription;
  constructor(private auth: FakeAuthService) { }


  ngOnInit(): void {
    this.loggedIn = this.auth.state;
    this.subsc = this.auth.status.subscribe(status => {
      this.loggedIn = status;
    });
  }

  updateName() {
    this.loginForm.setValue({name: 'ExampleName'});
  }

  onSubmit() {
    const { name } = this.loginForm.value;
    this.auth.logIn(name);
  }

}
