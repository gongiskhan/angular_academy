import * as productsModel from './../models/products';
import * as productActions from '../actions/product';
import { merge } from 'lodash';

export function reducer(state = productsModel.defaults, action: productActions.Actions): productsModel.Products {
  switch (action.type) {
    case productActions.ActionTypes.GET_ALL_SUCCESS:
      return merge({}, state, action.payload);
    default:
      return state;
  }
}

export const getProducts = (state: productsModel.Products) => state.products;
