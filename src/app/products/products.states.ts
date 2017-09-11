import { ProductService } from './../services/product.service';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { ProductsComponent } from './products.component';

export function loadProducts(transition) {
  const productService = transition.injector().get(ProductService);

  productService.dispatchGetAll();
}

export const PRODUCTS_STATE: Ng2StateDeclaration[] = [{
  name: 'products',
  url: '/products',
  component: ProductsComponent,
  onEnter: loadProducts
}];
