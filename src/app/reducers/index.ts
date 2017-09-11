import { createSelector } from 'reselect';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';
import { combineReducers } from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as userModel from '../models/user';
import * as productsModel from '../models/products';
import * as cartModel from '../models/cart';
import * as fromUser from './user';
import * as fromProducts from './product';
import * as fromCart from './cart';

export interface State {
  user: userModel.User;
  products: productsModel.Products;
  cart: cartModel.Cart;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  products: fromProducts.reducer,
  cart: fromCart.reducer
};

export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger()(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['user'], rehydrate: true})(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, localStorageSyncReducer]
  : [localStorageSyncReducer];

export const getUserState = (state: State) => state.user;
export const getUser = createSelector(getUserState, fromUser.getUser);

export const getProductsState = (state: State) => state.products;
export const getProducts = createSelector(getProductsState, fromProducts.getProducts);

export const getCartState = (state: State) => state.cart;
export const getCart = createSelector(getCartState, fromCart.getCart);
