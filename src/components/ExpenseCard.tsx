import * as React from 'react';
import styles from 'styled-components';

import { colors } from '../styles/layout';
import { Expense } from '../utils/models';

interface ExpenseProps {
  expense: Expense;
}

const ExpenseCard: React.SFC<ExpenseProps> = ({ expense }) => {
  return (
    <Wrapper>
      <LeftSection>
        <Details>{expense.details}</Details>
        <Type>{expense.type}</Type>
      </LeftSection>
      <RightSection>
        <Cost>{expense.cost} €</Cost>
      </RightSection>
    </Wrapper>
  );
};

const Wrapper = styles.div`
	display: flex;
	justify-content: space-between;
	align-items: center;	
	background: ${colors.white};
	margin: 10px 5vw;
	border-radius: 6px;
	box-shadow: 0px 6px 24px rgba(0,0,0,0.10);
	padding: 3.6rem 2rem;
`;

const LeftSection = styles.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const RightSection = styles.div`
	display: flex;
`;

const Details = styles.h2`
	font-size: 1.6rem;
	color: ${colors.darkBlue}
	font-weight: 600;
`;

const Type = styles.h4`
	font-size: 1.3rem;
	font-weight: 500;
	color: ${colors.blueGray};
	text-transform: capitalize;
	margin-top: 0.2rem;
`;

const Cost = styles.h4`
	font-size: 2rem;
	font-weight: 600;
	color: ${colors.blueGradientEnd}
`;

export default ExpenseCard;
