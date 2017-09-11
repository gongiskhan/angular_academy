import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-store-cart></app-store-cart>
    <app-store-item-list></app-store-item-list>
  `,
  styles: []
})
export class StoreComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
