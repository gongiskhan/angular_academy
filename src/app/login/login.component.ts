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
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h1 class="text-center login-title">Sign in</h1>
          <div class="account-wall">
            <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                 alt="">
            <form class="form-signin">
              <input type="text"
                     name="username"
                     class="form-control"
                     placeholder="Username"
                     aria-label="Username"
                     aria-describedby="basic-addon1"
                     [formControl]="loginForm.controls['username']">
              <input type="password"
                     name="password"
                     class="form-control"
                     placeholder="Password"
                     aria-label="Password"
                     aria-describedby="basic-addon1"
                     [formControl]="loginForm.controls['password']">
              <button class="btn btn-lg btn-primary btn-block" type="submit" (click)="onSignIn()">
                Sign in</button>
            </form>
          </div>
          <a href="#" class="text-center new-account" (click)="onSignUp()">Sign up </a>
        </div>
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
