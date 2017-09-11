import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Effect, Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as cartActions from '../actions/cart';
import {CartService} from '../services/cart.service';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) { }

  @Effect()
  get$: Observable<Action> = this.actions$.ofType(cartActions.ActionTypes.GET)
    .debounceTime(300)
    .map((action: cartActions.GetAction) => action.payload)
    .switchMap(payload => this.cartService.get()
      .map(res => new cartActions.GetSuccessAction(res))
      .catch(err => of(new cartActions.ServerFailAction(err)))
    );

  @Effect()
  add$: Observable<Action> = this.actions$.ofType(cartActions.ActionTypes.ADD)
    .debounceTime(300)
    .map((action: cartActions.AddAction) => action.payload)
    .switchMap(payload => this.cartService.add(payload)
      .map(res => new cartActions.AddSuccessAction(res))
      .catch(err => of(new cartActions.ServerFailAction(err)))
    );
}
