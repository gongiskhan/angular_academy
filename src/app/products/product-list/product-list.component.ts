import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/takeWhile';

import { Product } from './../../models/product';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="row">
        <app-product *ngFor="let product of getProducts() | async" [product]="product"></app-product>
      </div>
    </div>
  `,
  styles: []
})
export class ProductListComponent implements OnInit, OnDestroy {
  private alive = true;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getProducts() {
    return this.store.select(fromRoot.getProducts).takeWhile(() => this.alive);
  }

}
