import { Expense } from '../models';

const calculateExpenseSum = (expenses: Expense[]) => {
  const total = expenses.reduce((subTotal, expense) => {
    return expense.type === 'partagée'
      ? subTotal + expense.cost / 2
      : subTotal + expense.cost;
  }, 0);

  return total;
};

export default calculateExpenseSum;
