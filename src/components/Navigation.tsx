import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styled-components';

import ActionButton from './ActionButton';
import NavItem from './NavItem';

const Navigation: React.SFC<{}> = () => {
  return (
    <Nav>
      <NavList>
        <NavItem href="/" label="Accueil" icon="home" />
        <Link to="/new-expense">
          <ActionButton />
        </Link>
        <NavItem href="/stats" label="Statistiques" icon="chart" />
      </NavList>
    </Nav>
  );
};

const radius = 50;
const Nav = styles.nav`
	display: flex;
	height: 10vh;
	background: white;
	border-top-left-radius: ${radius}px;
	border-top-right-radius: ${radius}px;
`;

const NavList = styles.ul`
	position: relative;
	display: flex;
	width: 100%;

`;

export default Navigation;
