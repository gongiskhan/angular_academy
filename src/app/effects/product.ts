import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Effect, Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as productActions from '../actions/product';
import {ProductService} from '../services/product.service';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) { }

  @Effect()
  getAll$: Observable<Action> = this.actions$.ofType(productActions.ActionTypes.GET_ALL)
    .debounceTime(300)
    .map((action: productActions.GetAllAction) => action.payload)
    .switchMap(payload => this.productService.getAll()
      .map(res => new productActions.GetAllSuccessAction(res))
      .catch(err => of(new productActions.ServerFailAction(err)))
    );
}
