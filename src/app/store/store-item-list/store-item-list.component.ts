import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as fromRoot from '../../reducers';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-store-item-list',
  template: `
  <div class="text-center" style="width: 65%; display:inline-block; margin-left: 1.4em;">
    <div class="row">
      <app-store-item *ngFor="let product of getProducts() | async" [product]="product"></app-store-item>
    </div>
  </div>
  `,
  styles: []
})
export class StoreItemListComponent implements OnInit, OnDestroy {
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
