import {Product} from './product';

export interface Products {
  products: Array<Product>;
}

export const defaults: Products = {
  products: []
};
