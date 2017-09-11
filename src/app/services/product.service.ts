import { Products } from './../models/products';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as productActions from '../actions/product';
import {Observable} from 'rxjs/Rx';

const mocks = {
  PRODUCTS: {
    products: [
      {name: 'Product 1', description: 'This is product 1 description'},
      {name: 'Product 2', description: 'This is product 2 description'},
      {name: 'Product 3', description: 'This is product 3 description'},
      {name: 'Product 4', description: 'This is product 4 description'}
    ]
  }
};

const getAllMock = () => {
  return Observable.of(mocks.PRODUCTS);
};

@Injectable()
export class ProductService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State>) { }

  dispatchGetAll() {
    this.store.dispatch(new productActions.GetAllAction({}));
  }

  getAll() {
    // return this.http.get(`/api/products.json`);
    return getAllMock();
  }
}
