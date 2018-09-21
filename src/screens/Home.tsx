import * as React from 'react';

import Navigation from '../components/Navigation';
import { MainContent, ScreenWrapper } from '../styles/layout';

class Home extends React.Component {
  render() {
    return (
      <ScreenWrapper>
        <MainContent>
          <span>Home page bois</span>
        </MainContent>
        <Navigation />
      </ScreenWrapper>
    );
  }
}

export default Home;
