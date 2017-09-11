import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  GET_ALL: type('[Product] Get All products'),
  GET_ALL_SUCCESS: type('[Product] Get All Sucess'),
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

export class ServerFailAction implements Action {
  readonly type = ActionTypes.SERVER_FAIL;

  constructor(public payload: any) { }
}

export type Actions
  = GetAllAction
  | GetAllSuccessAction
  | ServerFailAction;
