import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from 'styled-components';

import ActionButton from './ActionButton';

const Nav = styles.nav`
	display: flex;
	height: 10vh;
	background: white;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
`;

const NavLinkList = styles.ul`
	position: relative;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;
`;

const Navigation: React.SFC<{}> = () => {
  return (
    <Nav>
      <NavLinkList>
        <NavLink to="/">Accueil</NavLink>
        <Link to="/new-expense">
          <ActionButton />
        </Link>
        <NavLink to="/stats">Statistiques</NavLink>
      </NavLinkList>
    </Nav>
  );
};

export default Navigation;
