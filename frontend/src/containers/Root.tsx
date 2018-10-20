import createBrowserHistory from 'history/es/createBrowserHistory';
import * as React from 'react';
import Provider from 'react-redux/es/components/Provider';
import {Router} from 'react-router-dom';
import {Store} from 'redux';
import {contextPath} from '../config/env';
import {ReduxState} from '../reducers/rootReducer';
import Routes from './Routes';

const history = createBrowserHistory({
  basename: contextPath
});

class Root extends React.PureComponent<RootProps> {

  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes/>
        </Router>
      </Provider>
    );
  }
}

interface RootProps {
  store: Store<ReduxState>;
}

export default Root;
