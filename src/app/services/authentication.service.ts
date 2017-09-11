import { Injectable } from '@angular/core';
import * as fromRoot from '../reducers';
import {Store} from '@ngrx/store';

@Injectable()
export class AuthenticationService {

  constructor(private store: Store<fromRoot.State>) { }

  isAuthenticated() {
    let loggedInUser;

    this.store.select(fromRoot.getUser).subscribe(user => loggedInUser = user);

    return !!loggedInUser;
  }

  hasRole(requiredRole) {
    let loggedInUser;

    this.store.select(fromRoot.getUser).subscribe(user => loggedInUser = user);

    return loggedInUser.roles.includes(requiredRole);
  }
}
