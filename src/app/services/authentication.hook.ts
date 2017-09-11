import { TransitionService } from '@uirouter/core';
import { AuthenticationService } from './authentication.service';

/**
 * This file contains a Transition Hook which protects a
 * route that requires authentication.
 *
 * This hook redirects to /login when both:
 * - The user is not authenticated
 * - The user is navigating to a state that requires authentication
 */
export function requiresAuthenticationHook(transitionService: TransitionService) {
  // Matches if the destination state's data property has a truthy 'requiresAuth' property
  const requiresAuthCriteria = {
    to: (state) => state.data && state.data.requiresAuth
  };

  // Function that returns a redirect for the current transition to the login state
  // if the user is not currently authenticated (according to the AuthService)

  const redirectToLogin = (transition) => {
    const authService: AuthenticationService = transition.injector().get(AuthenticationService);
    const $state = transition.router.stateService;

    if (!authService.isAuthenticated()) {
      return $state.target('login', undefined, { location: false });
    }
  };

  // Register the "requires auth" hook with the TransitionsService
  transitionService.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10});
}