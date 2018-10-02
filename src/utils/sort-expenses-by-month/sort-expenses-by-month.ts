import { Expense, ExpensesSortedByMonth } from '../models';

const sortExpensesByMonth = (expenses: Expense[]): ExpensesSortedByMonth => {
  const sortedExpenses = expenses.reduce((sortedByMonth, expense) => {
    const month = expense.date.slice(0, 7);
    if (sortedByMonth.hasOwnProperty(month)) {
      return {
        ...sortedByMonth,
        [month]: [...sortedByMonth[month], expense]
      };
    } else {
      return {
        ...sortedByMonth,
        [month]: [expense]
      };
    }
  }, {});
  return sortedExpenses;
};

export default sortExpensesByMonth;
