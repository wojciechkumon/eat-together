import * as React from 'react';
import {Store} from 'redux';
import {render} from 'react-dom';
import Root from './containers/Root';
import {ReduxState} from './reducers/rootReducer';
import {getStore} from './stores/reduxStore';

import 'bootstrap/dist/css/bootstrap.css';

const startApp = () => {
  const store: Store<ReduxState> = getStore();
  const rootEl = window.document.getElementById('root');
  render(<Root store={store}/>, rootEl);
};

startApp();
