import * as React from 'react';
import styles from 'styled-components';

import { Expense } from '../utils/models';

interface ListProps {
  expenses: Expense[];
}

class ExpensesList extends React.Component<ListProps, {}> {
  render() {
    return (
      <ListWrapper>
        {this.props.expenses.map((expense) => (
          <div>{expense.cost}</div>
        ))}
      </ListWrapper>
    );
  }
}

const ListWrapper = styles.div`
	display: flex;
	flex: 3;
	flex-direction: column;
`;

export default ExpensesList;
