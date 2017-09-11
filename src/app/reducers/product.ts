import * as productsModel from './../models/products';
import * as productActions from '../actions/product';
import { merge, without, clone } from 'lodash';

export function reducer(state = productsModel.defaults, action: productActions.Actions): productsModel.Products {
  switch (action.type) {
    case productActions.ActionTypes.GET_ALL_SUCCESS:
      return merge({}, state, action.payload);
    case productActions.ActionTypes.ADD_SUCCESS:
      return merge({}, state, {products: [ ...state.products, action.payload ]});
      case productActions.ActionTypes.REMOVE_SUCCESS:
        let stateCopy = clone(state);
        stateCopy.products = without(state.products, action.payload);
        return merge({}, stateCopy);
    default:
      return state;
  }
}

export const getProducts = (state: productsModel.Products) => state.products;
