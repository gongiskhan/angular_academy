import { Product } from './../../models/product';
import { Component, EventEmitter, OnInit, Input, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <div class="product">
      <div class="product-block">
        <button type="button" class="close" aria-label="Close" (click)="removeProduct()">
          <span>&times;</span>
        </button>
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
  @Output() 'onRemove' = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  removeProduct() {
    this.onRemove.emit(this.product);
  }
}
