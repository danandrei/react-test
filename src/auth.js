import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.data.user.accessToken !== null,
  wrapperDisplayName: 'userIsAuthenticated',
  redirectPath: '/login',
  allowRedirectBack: false,
});

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.data.user.accessToken === null,
  wrapperDisplayName: 'userIsNotAuthenticated',
  redirectPath: '/',
  allowRedirectBack: false,
});
