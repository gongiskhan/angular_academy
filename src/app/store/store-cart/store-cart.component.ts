import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/takeWhile';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-store-cart',
  template: `
  <div class="container-fluid">
    <div class="row justify-content-end" *ngFor="let cartItem of getCart() | async">
      <div class="col-sm-2">{{cartItem.name}}</div>
      <div class="col-sm-1">{{cartItem.quantity}}</div>
    </div>
    <div class="row justify-content-end">
      <div class="col-sm-2">
        <a class="btn btn-primary btn-sm" href="#" role="button">checkout</a>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class StoreCartComponent implements OnInit {
  private alive = true;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
  }

  getCart() {
    return this.store.select(fromRoot.getCart).takeWhile(() => this.alive);
  }
}
