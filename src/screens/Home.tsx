import * as React from 'react';

import ExpensesList from '../components/ExpensesList';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { MainContent, ScreenWrapper } from '../styles/layout';

import { Expense, User } from '../utils/models';

interface HomeProps {
  expenses: Expense[];
  user: User;
  selectedMonth: string;
  handleMonthSelection(value: -1 | 1): void;
}

class Home extends React.Component<HomeProps, {}> {
  render() {
    const { handleMonthSelection, selectedMonth, user } = this.props;
    return (
      <ScreenWrapper>
        <MainContent>
          <Header
            user={user}
            handleMonthSelection={handleMonthSelection}
            selectedMonth={selectedMonth}
          />
          <ExpensesList expenses={this.props.expenses} />
        </MainContent>
        <Navigation />
      </ScreenWrapper>
    );
  }
}

export default Home;
