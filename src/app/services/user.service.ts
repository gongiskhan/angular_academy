import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

import * as fromRoot from '../reducers';
import { User } from './../models/user';
import { Roles } from './../models/roles';

const mocks = {
  ADMIN: {
    id: 1,
    username: 'admin',
    password: 'abc',
    role: Roles.ADMIN
  },

  MANAGER: {
    id: 2,
    username: 'man',
    password: 'abc',
    role: Roles.MANAGER
  },

  USER: {
    id: 10,
    username: 'usr',
    password: 'abc',
    role: Roles.USER
  }
};

const getUserMock = (username) => {
  switch (username) {
    case 'admin':
    return Observable.of(mocks.ADMIN);
    case 'man':
    return Observable.of(mocks.MANAGER);
    case 'user':
    return Observable.of(mocks.USER);
  }
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State>) { }

  signIn(payload) {
    // return this.http.post(`/api/user/signin.json`, payload);
    return getUserMock(payload.username);
  }

  signUp(payload) {
    return this.http.post(`/api/user/signup.json`, payload);
  }
}
