import { CartItem } from './../models/cart-item';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  ADD: type('[Cart] Add to Cart'),
  ADD_SUCCESS: type('[Cart] Add to Cart Success'),
  GET: type('[Cart] Get All cart'),
  GET_SUCCESS: type('[Cart] Get All Sucess'),
  SERVER_FAIL: type('[Cart] Server fail'),
  CHECKOUT: type('[Cart] Checkout Cart')
};

export class AddAction implements Action {
  readonly type = ActionTypes.ADD;

  constructor(public payload: string) { }
}

export class AddSuccessAction implements Action {
  readonly type = ActionTypes.ADD_SUCCESS;

  constructor(public payload: CartItem) { }
}

export class GetAction implements Action {
  readonly type = ActionTypes.GET;

  constructor(public payload: any) { }
}

export class GetSuccessAction implements Action {
  readonly type = ActionTypes.GET_SUCCESS;

  constructor(public payload: any) { }
}

export class ServerFailAction implements Action {
  readonly type = ActionTypes.SERVER_FAIL;

  constructor(public payload: any) { }
}

export type Actions
  = AddAction
  | AddSuccessAction
  | GetAction
  | GetSuccessAction
  | ServerFailAction;
