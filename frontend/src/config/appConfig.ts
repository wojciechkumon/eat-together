const apiBase = 'http://localhost:8080';

export const appConfig = {
  api: {
    login: `${apiBase}/oauth/token`,
    events: `${apiBase}/events`,
    join: `${apiBase}/events/join`
  },
  routes: {
    landingPage: '/',
    login: '/login',
    loginRedirectQuery: 'redirect'
  },
  localStorage: {tokenWrapperKey: 'auth-token'}
};
