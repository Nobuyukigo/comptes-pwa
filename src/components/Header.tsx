import * as React from 'react';
import styles from 'styled-components';
import { colors } from '../styles/layout';

import readableMonthAndYear from '../utils/readable-month-and-year/readable-month-and-year';

import { User } from '../utils/models';
import SelectorIcon from './SelectorIcon';

interface HeaderProps {
  user: User;
  selectedMonth: string;
  handleMonthSelection(value: -1 | 1): any;
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    const { handleMonthSelection } = this.props;
    const { name } = this.props.user;

    return (
      <HeaderWrapper>
        <Name>{name}</Name>
        <SVG viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </SVG>
        <MonthSelector>
          <SelectorIcon
            handleClick={() => handleMonthSelection(-1)}
            render={<polyline points="15 18 9 12 15 6" />}
          />
          <MonthAndYear>
            {readableMonthAndYear(this.props.selectedMonth)}
          </MonthAndYear>
          <SelectorIcon
            handleClick={() => handleMonthSelection(1)}
            render={<polyline points="9 18 15 12 9 6" />}
          />
        </MonthSelector>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styles.div`
	position: relative;
	display: flex;
	flex: 1;
	background: linear-gradient(to right, ${colors.blueGradientStart}, ${
  colors.blueGradientEnd
});
	justify-content: space-between;
`;

const Name = styles.h1`
	color: white;
	font-size: 2.2rem;
	font-weight: 600;
	margin-left: 5vw;
	margin-top: 5vw;
`;

const iconSize = 28;
const SVG = styles.svg`
	height: ${iconSize}px;
	width: ${iconSize}px;
	fill: none;
	stroke: white;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	margin-top: 5vw;
	margin-right: 5vw;
`;

const MonthSelector = styles.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 200px;
	height: 40px;
	background: white;
	border-radius: 100px;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);
	box-shadow: 0px 2px 10px rgba(0,0,0,0.10);
`;

const MonthAndYear = styles.span`
	font-size: 1.4rem;
	font-weight: 600;
	color: ${colors.darkBlue};
`;

export default Header;
