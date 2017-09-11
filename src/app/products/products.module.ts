import { UIRouterModule } from '@uirouter/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { NewProductInputComponent } from './new-product-input/new-product-input.component';
import { PRODUCTS_STATE } from './products.states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forChild({
      states: PRODUCTS_STATE
    }),
  ],
  declarations: [ProductsComponent, ProductComponent, ProductListComponent, NewProductInputComponent]
})
export class ProductsModule { }
