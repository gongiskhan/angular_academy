import { Product } from './../models/product';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  GET_ALL: type('[Product] Get All products'),
  GET_ALL_SUCCESS: type('[Product] Get All Sucess'),
  ADD: type('[Product] Add product'),
  ADD_SUCCESS: type('[Product] Add product success'),
  REMOVE: type('[Product] Remove product'),
  REMOVE_SUCCESS: type('[Product] Remove product success'),
  SERVER_FAIL: type('[Product] Server fail')
};

export class GetAllAction implements Action {
  readonly type = ActionTypes.GET_ALL;

  constructor(public payload: any) { }
}

export class GetAllSuccessAction implements Action {
  readonly type = ActionTypes.GET_ALL_SUCCESS;

  constructor(public payload: any) { }
}

export class AddAction implements Action {
  readonly type = ActionTypes.ADD;

  constructor(public payload: Product) { }
}

export class AddSuccessAction implements Action {
  readonly type = ActionTypes.ADD_SUCCESS;

  constructor(public payload: Product) { }
}

export class RemoveAction implements Action {
  readonly type = ActionTypes.REMOVE;

  constructor(public payload: Product) { }
}

export class RemoveSuccessAction implements Action {
  readonly type = ActionTypes.REMOVE_SUCCESS;

  constructor(public payload: any) { }
}

export class ServerFailAction implements Action {
  readonly type = ActionTypes.SERVER_FAIL;

  constructor(public payload: any) { }
}

export type Actions
  = GetAllAction
  | GetAllSuccessAction
  | AddAction
  | AddSuccessAction
  | RemoveAction
  | RemoveSuccessAction
  | ServerFailAction;
