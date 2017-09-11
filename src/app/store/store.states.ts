import { ProductService } from './../services/product.service';
import { CartService } from './../services/cart.service';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { StoreComponent } from './store.component';

export function loadProductsAndCart(transition) {
  const productService = transition.injector().get(ProductService);

  productService.dispatchGetAll();

  const cartService = transition.injector().get(CartService);

  cartService.dispatchGet();
}

export const STORE_STATE: Ng2StateDeclaration[] = [{
  name: 'store',
  url: '/store',
  component: StoreComponent,
  onEnter: loadProductsAndCart
}];
