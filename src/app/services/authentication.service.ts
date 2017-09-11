import { Injectable } from '@angular/core';
import * as fromRoot from '../reducers';
import {Store} from '@ngrx/store';
import { intersection } from 'lodash';

@Injectable()
export class AuthenticationService {

  constructor(private store: Store<fromRoot.State>) { }

  isAuthenticated() {
    let loggedInUser;

    this.store.select(fromRoot.getUser).subscribe(user => loggedInUser = user);

    return !!loggedInUser;
  }

  hasAnyRole(requiredRoles) {
    let loggedInUser;

    this.store.select(fromRoot.getUser).subscribe(user => loggedInUser = user);

    return requiredRoles.includes(loggedInUser.role);
  }
}
