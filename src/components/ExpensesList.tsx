import * as React from 'react';
import styles from 'styled-components';

import { Expense } from '../utils/models';

import ExpenseCard from './ExpenseCard';

interface ListProps {
  expenses: Expense[];
}

class ExpensesList extends React.Component<ListProps, {}> {
  render() {
    return (
      <ListWrapper>
        {this.props.expenses.map((expense) => (
          <ExpenseCard expense={expense} key={expense.date + expense.details} />
        ))}
      </ListWrapper>
    );
  }
}

const ListWrapper = styles.div`
	display: flex;
	flex: 6;
	flex-direction: column;
	margin: 50px 0px;
`;

export default ExpensesList;
