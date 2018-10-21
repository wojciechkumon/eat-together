import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import styled from 'styled-components';
import {appConfig} from '../config/appConfig';
import {checkStatus} from '../utils/api';

class LoginPage extends React.PureComponent<RouteComponentProps<{}>, LoginPageState> {
  state = {
    email: '',
    password: '',
    loggingIn: false,
    error: false
  };

  submit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.setState({error: false, loggingIn: true});

    fetch(new Request(appConfig.api.login, {
      method: 'POST',
      body: `username=${email}&password=${password}&grant_type=password`,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic RWF0VG9nZXRoZXI6ZWF0dG9nZXRoZXJfcGFzc3dvcmQ='
      }
    }))
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        window.localStorage.setItem(appConfig.localStorage.tokenWrapperKey, JSON.stringify({
          token: json.access_token,
          email
        }));
        this.props.history.push(appConfig.routes.landingPage)
      })
      .catch(() => this.setState({error: true, loggingIn: false}))
  };

  render() {
    const {email, password, loggingIn, error} = this.state;

    return (
      <div className="h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="text-center mb-5">
          <Logo>Eat Together</Logo>
        </div>
        <div className="w-50">
          <form onSubmit={this.submit}
                className="d-flex flex-column justify-content-center">
            <div className="form-group">
              <input value={email} onChange={e => this.setState({email: e.target.value})}
                     disabled={loggingIn}
                     type="email" className="form-control" id="login-email"
                     aria-describedby="emailHelp"
                     style={error ? {borderColor: 'red', borderWidth: '1px'} : undefined}
                     placeholder="Email" autoComplete="username"/>
            </div>
            <div className="form-group">
              <input value={password} onChange={e => this.setState({password: e.target.value})}
                     disabled={loggingIn}
                     type="password" className="form-control" id="exampleInputPassword1"
                     placeholder="Password"
                     style={error ? {borderColor: 'red', borderWidth: '1px'} : undefined}
                     autoComplete="current-password"/>
            </div>
            <button type="submit" className="btn btn-secondary" disabled={loggingIn}>Eat & Cook!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const Logo = styled.span`
      font-family: 'Amatic SC', cursive !important;
      color: #ffffff !important;
      font-size: 25vw !important;
      `;

interface LoginPageState {
  email: string;
  password: string;
  loggingIn: boolean;
  error: boolean;
}

export default withRouter(LoginPage);
