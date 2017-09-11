import { Product } from './../../models/product';
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as cartActions from '../../actions/cart';

@Component({
  selector: 'app-store-item',
  template: `
    <div class="card" style="margin-bottom: 1em;">
      <div class="card-header">
        {{ product.name }}
      </div>
      <div class="card-block">
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div class="card-footer text-muted">
        <a href="#" class="btn btn-primary" (click)="addToCart(product)">add to cart</a>
      </div>
    </div>
  `,
  styles: []
})
export class StoreItemComponent implements OnInit {
  @HostBinding('class') class = 'col-3';
  @Input() product: Product;

  constructor(private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.store.dispatch(new cartActions.AddAction(product.name));
  }
}
