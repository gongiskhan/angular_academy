import { UIRouterModule } from '@uirouter/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreComponent } from './store.component';
import { STORE_STATE } from './store.states';
import { StoreItemListComponent } from './store-item-list/store-item-list.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { StoreCartComponent } from './store-cart/store-cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forChild({
      states: STORE_STATE
    }),
  ],
  declarations: [StoreComponent, StoreItemListComponent, StoreItemComponent, StoreCartComponent]
})
export class StoreModule { }
