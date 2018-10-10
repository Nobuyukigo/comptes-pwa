import * as React from 'react';
import styles from 'styled-components';

import { colors } from '../styles/layout';
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

const radius = 6;
const ListWrapper = styles.ul`
	display: flex;
	flex: 6;
	flex-direction: column;
	margin: 50px 1.8rem;
	padding-top: 4px;
	border-top-right-radius: ${radius}px;
	border-top-left-radius: ${radius}px;
	background: ${colors.white};
	list-style: none;
`;

export default ExpensesList;
