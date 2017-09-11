import { Roles } from './../models/roles';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as userActions from '../actions/user';

@Component({
  selector: 'app-login',
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">Username</span>
        <input type="text"
          name="username"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          [formControl]="loginForm.controls['username']">
      </div>
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">Password</span>
        <input type="password"
          name="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          [formControl]="loginForm.controls['password']">
      </div>
      <div class="btn-group mr-2" role="group" aria-label="Sign">
        <button type="button" class="btn btn-secondary" (click)="onSignIn()">Sign in</button>
        <button type="button" class="btn btn-secondary" (click)="onSignUp()">Sign up</button>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private store: Store<fromRoot.State>, fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(2)])]
    });
  }

  ngOnInit() {
  }

  onSignIn() {
    if (this.loginForm.valid) {
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;

      this.signIn(username, password);
    }
  }

  signIn(username, password) {
    if (this.loginForm.valid) {
      const user: User = {
        username: username,
        password: password
      };

      this.store.dispatch(new userActions.SignInAction(user));
    }
  }

  onSignUp() {
    if (this.loginForm.valid) {
      const username = this.loginForm.controls['username'].value;
      const password = this.loginForm.controls['password'].value;

      this.signUp(username, password);
    }
  }

  signUp(username, password) {
    const user: User = {
      username: username,
      password: password,
      role: Roles.USER
    };

    this.store.dispatch(new userActions.SignUpAction(user));
  }
}
