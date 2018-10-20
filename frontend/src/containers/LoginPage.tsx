import * as React from 'react';
import styled from 'styled-components';

class LoginPage extends React.PureComponent {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm text-center">
            <Logo>Eat Together</Logo>
          </div>
        </div>
        <div className="flex-row">
          <div className="d-flex justify-content-center">
            <form className="d-flex flex-column justify-content-center">
              <div className="form-group">
                <input type="email" className="form-control" id="login-email"
                       aria-describedby="emailHelp"
                       placeholder="Email" autoComplete="username"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1"
                       placeholder="Password"
                       autoComplete="current-password"/>
              </div>
              <button type="submit" className="btn btn-secondary">Eat & Cook!</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const Logo = styled.span`
  font-family: 'Amatic SC', cursive !important;
  color: #ffffff !important;
  font-size: 25vw !important;
  alignment: center !important;
`;

export default LoginPage;
