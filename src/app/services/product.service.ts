import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as productActions from '../actions/product';
import {Observable} from 'rxjs/Rx';
import { merge, random, find, without } from 'lodash';

const mocks = {
  PRODUCTS: {
    products: [
      {id: 0, name: 'Product 1', description: 'This is product 1 description'},
      {id: 1, name: 'Product 2', description: 'This is product 2 description'},
      {id: 2, name: 'Product 3', description: 'This is product 3 description'},
      {id: 3, name: 'Product 4', description: 'This is product 4 description'},
      {id: 3, name: 'Product 5', description: 'This is product 5 description'},
      {id: 3, name: 'Product 6', description: 'This is product 6 description'},
      {id: 3, name: 'Product 7', description: 'This is product 7 description'},
      {id: 3, name: 'Product 8', description: 'This is product 8 description'}
    ]
  }
};

const getAllMock = () => {
  return Observable.of(mocks.PRODUCTS);
};

const addMock = (product) => {
  const newProduct = merge({id: random(4, 1000)}, product);

  mocks.PRODUCTS.products.push(newProduct);

  return Observable.of(newProduct);
};

const removeMock = (productId) => {
  const removedProduct = find(mocks.PRODUCTS.products, (product) => product.id === productId);

  mocks.PRODUCTS.products = without(mocks.PRODUCTS.products, removedProduct);

  return Observable.of(removedProduct);
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

  add(product: Product) {
    // return this.http.post(`/api/v1/products.json`, product);
    return addMock(product);
  }

  remove(product: Product) {
    // return this.http.delete(`/api/v1/products/${payload.id}.json`);
    return removeMock(product.id);
  }
}
