import * as React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

class LayoutWrapper extends React.PureComponent {

  render() {
    const {children} = this.props;
    return (
      <MainContainer>
        <Header/>
        {children}
        <Footer/>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  margin: 0 auto;
`;

export default LayoutWrapper;
