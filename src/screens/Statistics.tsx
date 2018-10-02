import * as React from 'react';

import Navigation from '../components/Navigation';
import { MainContent, ScreenWrapper } from '../styles/layout';

import { User } from '../utils/models';

interface StatisticsProps {
  user: User;
  disconnect(): void;
}

class Statistics extends React.Component<StatisticsProps, {}> {
  render() {
    return (
      <ScreenWrapper>
        <MainContent>
          <span>Statistics page bois</span>
          <button onClick={this.props.disconnect}>Disconnect</button>
        </MainContent>
        <Navigation />
      </ScreenWrapper>
    );
  }
}

export default Statistics;
