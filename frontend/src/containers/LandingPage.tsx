import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import styled from 'styled-components';
import AboutModal from '../components/AboutModal';
import Map from '../components/Map';
import MyEventsModal from '../components/MyEventsModal';
import NewEventModal from '../components/NewEventModal';
import SearchModal from '../components/SearchModal';
import {appConfig} from '../config/appConfig';

class LandingPage extends React.PureComponent<RouteComponentProps<{}>, LandingPageState> {
  state = {
    menuOpen: false
  };

  logout = () => {
    window.localStorage.removeItem(appConfig.localStorage.tokenWrapperKey);
    this.props.history.push(appConfig.routes.login);
  };

  render() {
    return (
      <>
        <div className="d-flex flex-column h-100">
          <nav className="d-flex justify-content-between align-items-center">
            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
              <i className="fa fa-bars fa-2x text-white p-3"/>
            </a>
            <MainMenu className="dropdown-menu dropdown">
              <a className="dropdown-item" data-toggle="modal" data-target="#new-event-modal"
                 href="#">
                <i className="far fa-plus-square"/>
                Add new event!
              </a>
              <a className="dropdown-item" data-toggle="modal" data-target="#my-events-modal"
                 href="#">
                <i className="far fa-calendar"/>
                My events
              </a>
              <a className="dropdown-item" data-toggle="modal" data-target="#profile-modal"
                 href="#">
                <i className="far fa-user"/>
                Profile
              </a>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" data-toggle="modal" data-target="#about-modal" href="#">
                <i className="far fa-question-circle"/>
                About
              </a>
              <a className="dropdown-item" data-toggle="modal" data-target="#settings-modal"
                 href="#">
                <i className="fa fa-cog"/>
                Settings
              </a>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" data-toggle="modal" data-target="#settings-modal"
                 href="#" onClick={this.logout}>
                <i className="fa fa-sign-out-alt"/>
                Log out
              </a>
            </MainMenu>
            <LogoSmall>Eat Together</LogoSmall>
            <a data-toggle="modal" data-target="#search-modal" href="#">
              <i className="fa fa-search fa-2x text-white p-3"/>
            </a>
          </nav>
          <div className="d-flex flex-column flex-grow-1">
            <Map/>
          </div>
        </div>
        <SearchModal/>
        <AboutModal/>
        <NewEventModal/>
        <MyEventsModal/>
      </>
    );
  }
}

const LogoSmall = styled.span`
  font-family: 'Amatic SC', cursive !important;
  color: #ffffff !important;
  font-size: 3em !important;
  alignment: center !important;
`;

const MainMenu = styled.div`
  width: 75vw;
  font-size: 150%;
`;

interface LandingPageState {
  menuOpen: boolean;
}

export default withRouter(LandingPage);
