import { UIRouter } from '@uirouter/angular';
import { Category } from '@uirouter/core/lib';
import { requiresAuthenticationHook } from './services/authentication.hook';

export function uiRouterConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;

  requiresAuthenticationHook(transitionService);
  router.trace.enable(Category.TRANSITION);
}
