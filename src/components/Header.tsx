import * as React from 'react';
import styles from 'styled-components';
import { colors } from '../styles/layout';

import { User } from '../utils/models';

interface HeaderProps {
  user: User;
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    const { name } = this.props.user;
    return (
      <HeaderWrapper>
        <Name>{name}</Name>
        <SVG
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </SVG>
        <MonthSelector />
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
	stroke: white;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	margin-top: 5vw;
	margin-right: 5vw;
`;

const MonthSelector = styles.div`
	position: absolute;
	width: 200px;
	height: 40px;
	background: white;
	border-radius: 100px;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);
	box-shadow: 0px 2px 10px rgba(0,0,0,0.10);
`;

export default Header;
