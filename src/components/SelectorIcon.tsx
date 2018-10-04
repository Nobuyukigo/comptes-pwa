import * as React from 'react';
import styles from 'styled-components';

import { colors } from '../styles/layout';

interface SelectorIconProps {
  render: JSX.Element;
  handleClick(): void;
}

const SelectorIcon: React.SFC<SelectorIconProps> = (props) => {
  return (
    <Wrapper onClick={props.handleClick}>
      <SVGContainer
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {props.render}
      </SVGContainer>
    </Wrapper>
  );
};

const Wrapper = styles.div`
	display: flex;
	padding: 10px;
`;

const iconSize = 24;
const SVGContainer = styles.svg`
	height: ${iconSize}px;
	width: ${iconSize}px;
	fill: none;
	stroke: ${colors.darkBlue};
	stroke-width: 2;
`;

export default SelectorIcon;
