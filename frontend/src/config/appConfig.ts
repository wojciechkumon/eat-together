const apiBase = 'http://localhost:8080';

export const appConfig = {
  api: {
    login: `${apiBase}/oauth/token`
  },
  routes: {
    landingPage: '/',
    login: '/login',
    loginRedirectQuery: 'redirect'
  },
  localStorage: {tokenWrapperKey: 'auth-token'}
};
