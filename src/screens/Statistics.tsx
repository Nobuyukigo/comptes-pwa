import * as React from 'react';

import Navigation from '../components/Navigation';
import { MainContent, ScreenWrapper } from '../styles/layout';

import { User } from '../utils/models';

interface StatisticsProps {
  user: User;
}

class Statistics extends React.Component<StatisticsProps, {}> {
  render() {
    return (
      <ScreenWrapper>
        <MainContent>
          <span>Statistics page bois</span>
        </MainContent>
        <Navigation />
      </ScreenWrapper>
    );
  }
}

export default Statistics;
