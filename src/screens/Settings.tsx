import * as React from 'react';

import Navigation from '../components/Navigation';
import { MainContent, ScreenWrapper } from '../styles/layout';

class Settings extends React.Component {
  render() {
    return (
      <ScreenWrapper>
        <MainContent>
          <span>Settings page bois</span>
        </MainContent>
        <Navigation />
      </ScreenWrapper>
    );
  }
}

export default Settings;
