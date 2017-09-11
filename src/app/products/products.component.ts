import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="row justify-content-end">
        <app-new-product-input></app-new-product-input>
      </div>
    </div>
    <app-product-list></app-product-list>
  `,
  styles: [],
})
export class ProductsComponent implements OnInit {
  ngOnInit() {
  }

  constructor() {
  }
}
