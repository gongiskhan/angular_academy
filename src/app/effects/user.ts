import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Effect, Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as userActions from '../actions/user';
import {UserService} from '../services/user.service';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) { }

  @Effect()
  signIn$: Observable<Action> = this.actions$.ofType(userActions.ActionTypes.SIGNIN)
    .debounceTime(300)
    .map((action: userActions.SignInAction) => action.payload)
    .switchMap(payload => this.userService.signIn(payload)
      .map(res => new userActions.SignInSuccessAction(res))
      .catch(err => of(new userActions.ServerFailAction(err)))
    );

  signUp$: Observable<Action> = this.actions$.ofType(userActions.ActionTypes.SIGNUP)
    .debounceTime(300)
    .map((action: userActions.SignUpAction) => action.payload)
    .switchMap(payload => this.userService.signUp(payload)
      .map(res => new userActions.SignUpSuccessAction(res))
      .catch(err => of(new userActions.ServerFailAction(err)))
    );
}
