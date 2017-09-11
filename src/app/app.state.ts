import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { Transition } from '@uirouter/core';

export const appState = {
  name: 'app',
  component: AppComponent,
};

export const loginState = {
  name: 'login',
  url: '/login',
  component: LoginComponent,
  resolve: [
    { token: 'returnTo', deps: [Transition], resolveFn: returnTo },
  ]
};

export function returnTo ($transition$: Transition): any {
  if ($transition$.redirectedFrom() != null) {
    // The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
    // Return to the original attempted target state (e.g., contacts)
    return $transition$.redirectedFrom().targetState();
  }

  const $state = $transition$.router.stateService;

  // The user was not redirected to the login state; they directly activated the login state somehow.
  // Return them to the state they came from.
  if ($transition$.from().name !== '') {
    return $state.target($transition$.from(), $transition$.params('from'));
  }

  // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
  return $state.target('home');
}

export const storeFutureState = {
  name: 'store.**',
  url: '/store',
  loadChildren: './store/store.module#StoreModule'
};

export const productsFutureState = {
  name: 'products.**',
  url: '/products',
  loadChildren: './products/products.module#ProductsModule'
};

export const APP_STATES = [
  appState,
  loginState,
  storeFutureState,
  productsFutureState
];
