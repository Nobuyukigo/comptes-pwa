import calculateExpenseSum from './calculate-expense-sum';

import { Expense } from '../models';

const mockedExpenses = [
  {
    cost: 26,
    type: 'partagée'
  },
  {
    cost: 54,
    type: 'partagée'
  },
  {
    cost: 12,
    type: 'avance'
  },
  {
    cost: 40,
    type: 'partagée'
  },
  {
    cost: 20,
    type: 'partagée'
  }
];

test('calculate the sum of a set of expenses', () => {
  // calculate-expense-sum only requires the cost and type of an expense
  expect(calculateExpenseSum(mockedExpenses as Expense[])).toBe(82);
});
