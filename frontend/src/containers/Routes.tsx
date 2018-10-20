import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Switch} from 'react-router-dom';
import {scrollOnMount} from '../common/ScrollOnMountHoc';
import {appConfig} from '../config/appConfig';
import {isDevEnv} from '../config/env';
import LandingPage from './LandingPage';
import LayoutWrapper from './LayoutWrapper';
import LoginPage from './LoginPage';

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route path={appConfig.routes.login} component={LoginPageWrapped}/>
        <Route component={LayoutWrappedPages}/>
      </Switch>
    );
  }
}

export const LayoutWrappedPages = () => (
  <LayoutWrapper>
    <Switch>
      <Route component={LandingPage}/>
    </Switch>
  </LayoutWrapper>
);

const LoginPageWrapped = scrollOnMount(LoginPage);
// const NotFoundWrapped = scrollOnMount(NotFound);

let moduleToExport = Routes;
if (isDevEnv) {
  moduleToExport = hot(module)(Routes);
}
export default moduleToExport;
