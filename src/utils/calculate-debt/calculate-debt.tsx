import getFirstName from '../get-first-name/get-first-name';

import { Expense, UserWithFriend } from '../models';

const getSum = (expenses: Expense[]) => {
  const total = expenses.reduce((cumulated, expense) => {
    return cumulated + expense.cost;
  }, 0);
  return total;
};

const calculateDebt = (user: UserWithFriend, expenses: Expense[]) => {
  const paidInAdvanceByUser = expenses.filter(
    (expense) => expense.type === 'avance' && expense.whoPaid === user.id
  );

  const paidInAdvanceByFriend = expenses.filter(
    (expense) => expense.type === 'avance' && expense.whoPaid === user.friend.id
  );

  const paidSharedByUser = expenses.filter(
    (expense) => expense.type === 'partagée' && expense.whoPaid === user.id
  );

  const paidSharedByFriend = expenses.filter(
    (expense) =>
      expense.type === 'partagée' && expense.whoPaid === user.friend.id
  );

  const totalPaidShared = getSum(paidSharedByUser) + getSum(paidSharedByFriend);
  const actualSharedExpense = totalPaidShared / 2;

  const owedToUser =
    getSum(paidSharedByUser) -
    actualSharedExpense +
    getSum(paidInAdvanceByUser) -
    getSum(paidInAdvanceByFriend);

  const friendName = getFirstName(user.friend.name);

  return {
    value: Math.abs(owedToUser),
    summary: owedToUser > 0 ? `Vous sont dus` : `Dus à ${friendName}`
  };
};

export default calculateDebt;
