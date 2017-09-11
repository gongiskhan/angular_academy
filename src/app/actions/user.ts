import { User } from './../models/user';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  SIGNUP: type('[User] Sign up user'),
  SIGNUP_SUCCESS: type('[User] Sign up user Success'),
  SIGNIN: type('[User] Signin user'),
  SIGNIN_SUCCESS: type('[User] Signin user Success'),
  SIGNOUT: type('[User] Signout user Fail'),
  SIGNOUT_SUCCESS: type('[User] Signout user Success'),
  SERVER_FAIL: type('[User] Server fail')
};

export class SignUpAction implements Action {
  readonly type = ActionTypes.SIGNUP;

  constructor(public payload: User) { }
}

export class SignUpSuccessAction implements Action {
  readonly type = ActionTypes.SIGNUP_SUCCESS;

  constructor(public payload: any) { }
}

export class SignInAction implements Action {
  readonly type = ActionTypes.SIGNIN;

  constructor(public payload: User) { }
}

export class SignInSuccessAction implements Action {
  readonly type = ActionTypes.SIGNIN_SUCCESS;

  constructor(public payload: any) { }
}

export class SignOutAction implements Action {
  readonly type = ActionTypes.SIGNOUT;

  constructor(public payload: any) { }
}

export class SignOutSuccessAction implements Action {
  readonly type = ActionTypes.SIGNOUT_SUCCESS;

  constructor(public payload: null) { }
}

export class ServerFailAction implements Action {
  readonly type = ActionTypes.SERVER_FAIL;

  constructor(public payload: any) { }
}

export type Actions
  = SignUpAction
  | SignUpSuccessAction
  | SignInAction
  | SignInSuccessAction
  | SignOutAction
  | SignOutSuccessAction
  | ServerFailAction;
