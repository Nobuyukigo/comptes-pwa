import * as React from 'react';
import styles from 'styled-components';

import { colors } from '../styles/layout';
import { Expense } from '../utils/models';

interface ExpenseProps {
  expense: Expense;
}

const ExpenseCard: React.SFC<ExpenseProps> = ({ expense }) => {
  return (
    <ListElementWrapper>
      <Button>
        <LeftSection>
          <Details>{expense.details}</Details>
          <Type>{expense.type}</Type>
        </LeftSection>
        <RightSection>
          <Cost>{expense.cost} €</Cost>
        </RightSection>
      </Button>
    </ListElementWrapper>
  );
};

const ListElementWrapper = styles.li`
	background: red;
	display: flex;
	flex-shrink: 0;
`;

const paddingTopBottom = 2.4;

const Button = styles.button`
		position: relative;
		display: flex;
		flex-shrink: 0;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background: ${colors.white};
		border: none;
		padding: 1.8rem 2.8rem;
		-webkit-tap-highlight-color: #EBF2FB;

	&:after {
		content: "";
		position: absolute;
		height: 1px;
		width: calc(100% - ${paddingTopBottom * 2}rem);
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		background: #EBF2FB;
	}
`;

const LeftSection = styles.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const RightSection = styles.div`
	display: flex;
`;

const Details = styles.h2`
	font-size: 1.5rem;
	color: ${colors.darkBlue}
	font-weight: 600;
`;

const Type = styles.h4`
	font-size: 1.2rem;
	font-weight: 500;
	color: ${colors.blueGray};
	text-transform: capitalize;
	margin-top: 0.2rem;
`;

const Cost = styles.h4`
	font-size: 1.8rem;
	font-weight: 600;
	color: ${colors.blueGradientEnd}
`;

export default ExpenseCard;
