import { Expense, MonthTotal } from '../models';

const calculateTotalPerMonth = (expenses: Expense[]) => {
  return Object.keys(expenses).map((month) => {
    const defaultValue = { month, shared: 0, personal: 0 };

    return expenses[month].reduce(
      (cumulative: MonthTotal, expense: Expense) => {
        if (expense.type === 'partagée') {
          return {
            ...cumulative,
            shared: cumulative.shared + expense.cost
          };
        } else {
          return {
            ...cumulative,
            personal: cumulative.personal + expense.cost
          };
        }
      },
      defaultValue
    );
  });
};

export default calculateTotalPerMonth;
