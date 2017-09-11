import { Product } from './../../models/product';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <div class="product">
      <div class="product-block">
        <p class="product-name">{{ product.name }}</p>
        <p class="product-name">{{ product.description }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  @HostBinding('class') class = 'col-2';
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
