import { Product } from './../../models/product';
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as cartActions from '../../actions/cart';

@Component({
  selector: 'app-store-item',
  template: `
    <div class="product">
      <div class="product-block">
        <p class="product-name">{{ product.name }}</p>
        <p class="product-description">{{ product.description }}</p>
        <button class="btn btn-primary btn-sm" role="button" (click)="addToCart(product)">add to cart</button>
      </div>
    </div>
  `,
  styles: []
})
export class StoreItemComponent implements OnInit {
  @HostBinding('class') class = 'col-2';
  @Input() product: Product;

  constructor(private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.store.dispatch(new cartActions.AddAction(product.name));
  }
}
