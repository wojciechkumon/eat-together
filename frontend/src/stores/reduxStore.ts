import {applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools as composeReduxDevTools} from 'redux-devtools-extension';
import {composeWithDevTools as composeLogOnlyReduxDevTools} from 'redux-devtools-extension/logOnly';
import rootReducer, {ReduxState} from '../reducers/rootReducer';
import {isProdEnv} from '../config/env';

const getMiddleware = () =>
  isProdEnv
    ? composeLogOnlyReduxDevTools(applyMiddleware(thunk))
    : composeReduxDevTools(applyMiddleware(thunk));

export const getStore = (): Store<ReduxState> =>
  createStore(
    rootReducer,
    getMiddleware()
  );
