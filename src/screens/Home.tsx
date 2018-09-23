import * as React from 'react';

import ExpensesList from '../components/ExpensesList';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { MainContent, ScreenWrapper } from '../styles/layout';

import { Expense, User } from '../utils/models';

interface HomeProps {
  user: User;
  expenses: Expense[];
}

class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <ScreenWrapper>
        <MainContent>
          <Header user={this.props.user} />
          <ExpensesList expenses={this.props.expenses} />
        </MainContent>
        <Navigation />
      </ScreenWrapper>
    );
  }
}

export default Home;
