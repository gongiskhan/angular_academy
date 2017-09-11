import * as userModel from '../models/user';
import * as userActions from '../actions/user';
import { merge } from 'lodash';

export function reducer(state: any = null, action: userActions.Actions): userModel.User {
  switch (action.type) {
    case userActions.ActionTypes.SIGNIN_SUCCESS:
      return merge({}, state, action.payload);
      case userActions.ActionTypes.SIGNUP_SUCCESS:
        return merge({}, state, action.payload);
    case userActions.ActionTypes.SIGNOUT_SUCCESS:
      return null;
    default:
      return state;
  }
}

export const getUser = (state: userModel.User) => state;
