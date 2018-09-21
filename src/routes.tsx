import * as React from 'react';
import { Route } from 'react-router-dom';
import styles from 'styled-components';

import Home from './screens/Home';
import Statistics from './screens/Statistics';

const RoutesWrapper = styles.div`
	height: 100%;
	width: 100%;
`;

export const Routes = () => (
  <RoutesWrapper>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/stats" component={Statistics} />
  </RoutesWrapper>
);
