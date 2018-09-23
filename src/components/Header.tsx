import * as React from 'react';
import styles from 'styled-components';

import { User } from '../utils/models';

interface HeaderProps {
  user: User;
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    const { avatar, name } = this.props.user;
    return (
      <HeaderWrapper>
        <img src={avatar} />
        <span>{name}</span>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styles.div`
	display: flex;
	flex: 2;
`;

export default Header;
