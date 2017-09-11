import { Products } from './../models/products';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as cartActions from '../actions/cart';
import {Observable} from 'rxjs/Rx';
import { find } from 'lodash';

const mocks = {
  CART: {
    items: [
      {name: 'Product 1', quantity: 1},
      {name: 'Product 2', quantity: 10},
      {name: 'Product 3', quantity: 32}
    ]
  }
};

const getMock = () => {
  return Observable.of(mocks.CART);
};

const updateMock = (name) => {
  let cartItemMock = find(mocks.CART.items, (item) => item.name === name);

  if (!cartItemMock) {
    cartItemMock = {
      name: name,
      quantity: 1
    };

    mocks.CART.items.push(cartItemMock);
  } else {
    cartItemMock.quantity += 1;
  }

  return Observable.of(cartItemMock);
};

@Injectable()
export class CartService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State>) { }

  dispatchGet() {
    this.store.dispatch(new cartActions.GetAction({}));
  }

  get() {
    // return this.http.get(`/api/cart.json`);
    return getMock();
  }

  add(name) {
    return updateMock(name);
  }
}
