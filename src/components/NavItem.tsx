import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styled-components';

import { colors } from '../styles/layout';

type NavIcon = 'home' | 'chart';

interface ItemProps {
  href: string;
  label: string;
  icon: NavIcon;
}

const icons = {
  home: () => (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
  ),
  chart: () => (
    <Icon viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </Icon>
  )
};

const NavItem: React.SFC<ItemProps> = (props) => {
  return (
    <AutoMargin>
      <Link to={props.href}>
        <Wrapper>
          {icons[props.icon]()}
          <Text>{props.label}</Text>
        </Wrapper>
      </Link>
    </AutoMargin>
  );
};

const iconSize = 28;

const AutoMargin = styles.div`
	margin: auto;
`;

const Wrapper = styles.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Icon = styles.svg`
	height: ${iconSize}px;
	width: ${iconSize}px;
	stroke: ${colors.darkBlue};
	stroke-width: 2px;
`;

const Text = styles.h3`
	font-size: 12px;
	color: ${colors.darkBlue};
	margin: 0;
`;

export default NavItem;
