import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styled-components';

const Nav = styles.nav`
	display: flex;
	height: 10vh;
  background: red;
`;

const NavLinkList = styles.ul`
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
        <NavLink to="/new-expense">Create</NavLink>
        <NavLink to="/stats">Statistiques</NavLink>
      </NavLinkList>
    </Nav>
  );
};

export default Navigation;
