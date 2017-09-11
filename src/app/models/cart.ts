import {CartItem} from './cart-item';

export interface Cart {
  items: Array<CartItem>;
}

export const defaults: Cart = {
  items: []
};
