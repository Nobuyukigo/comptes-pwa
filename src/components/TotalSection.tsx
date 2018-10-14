import * as React from 'react';
import styles from 'styled-components';

import { colors, RADIUS } from '../styles/layout';
import { Expense, User, UserWithFriend } from '../utils/models';

import calculateDebt from '../utils/calculate-debt/calculate-debt';
import calculateExpenseSum from '../utils/calculate-expense-sum/calculate-expense-sum';

interface TotalSectionProps {
  user: User;
  expenses: Expense[];
}

const TotalSection: React.SFC<TotalSectionProps> = ({ user, expenses }) => {
  const totalPaidThisMonth = calculateExpenseSum(expenses);
  const debt =
    user.friend &&
    calculateDebt(
      user as UserWithFriend,
      expenses.filter((expense) => expense.type !== 'personnelle')
    );

  return (
    <Wrapper>
      <Card>
        <Amount>{totalPaidThisMonth.toLocaleString('fr-FR')} €</Amount>
        <Description>Dépensés ce mois-ci</Description>
      </Card>
      <Card>
        {debt && (
          <>
            <Amount>{debt.value.toLocaleString('fr-FR')} €</Amount>
            <Description>{debt.summary}</Description>
          </>
        )}
      </Card>
    </Wrapper>
  );
};

const Wrapper = styles.section`
	display: flex;
	margin: 50px 1.8rem;
`;

const Card = styles.div`
	display: flex;
	flex: 1;
	flex-shrink: 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${colors.white};
	border-radius: ${RADIUS}px;
	padding: 2rem 0;

	&:first-child {
		margin-right: 1.8rem
	}
`;

const Description = styles.span`
	font-size: 1.3rem;
	color: ${colors.blueGray};
`;

const Amount = styles.span`
	font-size: 1.8rem;
	font-weight: 600;
	color ${colors.blueGradientEnd};
`;

export default TotalSection;
