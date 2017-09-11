import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-store-item-list></app-store-item-list>
    <app-store-cart></app-store-cart>
  `,
  styles: []
})
export class StoreComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
