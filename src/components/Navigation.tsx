import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styled-components';

import ActionButton from './ActionButton';
import NavItem from './NavItem';

interface NavState {
  active: 'home' | 'stats';
}

class Navigation extends React.Component<any, NavState> {
  constructor({}) {
    super({});

    this.state = {
      active: 'home'
    };
  }

  render() {
    const { active } = this.state;
    return (
      <Nav>
        <NavList>
          <NavItem
            href="/"
            label="Accueil"
            icon="home"
            active={active === 'home'}
          />
          <Link to="/new-expense">
            <ActionButton />
          </Link>
          <NavItem
            href="/stats"
            label="Statistiques"
            icon="chart"
            active={active === 'stats'}
          />
        </NavList>
      </Nav>
    );
  }
}

const radius = 50;
const Nav = styles.nav`
	position: fixed;
	display: flex;
	bottom: 0px;
	left: 0;
	right: 0;
	height: 64px;
	background: white;
	border-top-left-radius: ${radius}px;
	border-top-right-radius: ${radius}px;
	box-shadow: 0px -6px 24px rgba(0,0,0,0.12);
`;

const NavList = styles.ul`
	position: relative;
	display: flex;
	width: 100%;
`;

export default Navigation;
