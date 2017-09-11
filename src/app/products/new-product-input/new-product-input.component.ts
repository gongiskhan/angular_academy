import { Store } from '@ngrx/store';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';

import * as fromRoot from '../../reducers';
import * as productActions from '../../actions/product';

@Component({
  selector: 'app-new-product-input',
  template: `
    <div class="card">
      <div class="card-block">
      <input placeholder="Add name..." class="form-control" name="text" [formControl]="newProductForm.controls['name']">
      <input placeholder="Add description..." class="form-control" name="text" [formControl]="newProductForm.controls['description']">
      <button class="btn btn-primary btn-sm" role="button" (click)="addProduct()">Add</button>
      </div>
    </div>
  `,
  styles: []
})
export class NewProductInputComponent implements OnInit, OnDestroy {
  @HostBinding('class') class = 'col-8';
  newProductForm: FormGroup;
  private alive = true;

  constructor(private store: Store<fromRoot.State>, fb: FormBuilder) {
    this.newProductForm = fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  addProduct() {
    const name = this.newProductForm.controls['name'].value;
    const description = this.newProductForm.controls['description'].value;

    this.store.dispatch(new productActions.AddAction({name: name, description: description}));

    this.newProductForm.controls['name'].setValue('');
    this.newProductForm.controls['description'].setValue('');
  }
}
