import * as cartModel from './../models/cart';
import * as cartActions from '../actions/cart';
import { merge, clone, find } from 'lodash';

export function reducer(state = cartModel.defaults, action: cartActions.Actions): cartModel.Cart {
  switch (action.type) {
    case cartActions.ActionTypes.GET_SUCCESS:
      return merge({}, state, action.payload);
    case cartActions.ActionTypes.ADD_SUCCESS:
      let stateCopy = clone(state);
      let addedItem = find(stateCopy.items, (item) => item.name === action.payload.name);

      if (addedItem) {
        addedItem.quantity += 1;
      } else {
        stateCopy.items.push(action.payload);
      }

      return merge({}, stateCopy);
    default:
      return state;
  }
}

export const getCart = (state: cartModel.Cart) => state.items;
