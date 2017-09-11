import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/takeWhile';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-store-cart',
  template: `
  <div style="width: 20%; display:inline-block; margin-right: 1.5em;" class="float-right">
    <ul class="list-group">
      <li class="list-group-item list-group-item-action flex-column align-items-start active"><h6 style="margin:auto;">Cart Store</h6></li>
      <li class="list-group-item justify-content-between" *ngFor="let cartItem of getCart() | async">
        {{cartItem.name}}
        <span class="badge badge-default badge-pill">{{cartItem.quantity}}</span>
      </li>
    </ul>
    <div class=" ">
      <div class="">
        <a class="btn btn-primary float-right" style="margin-top: 0.5em;" href="#" role="button">checkout</a>
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
