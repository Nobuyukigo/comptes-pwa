import * as React from 'react';
import styles from 'styled-components';

import { colors } from '../styles/layout';

const ActionButton: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <PlusIcon
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </PlusIcon>
    </Wrapper>
  );
};

const buttonSize = 60;
const buttonMargin = 16;
const iconSize = 30;

const Wrapper = styles.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 50%;
	top: 0;
	transform: translate(-50%, -50%);
	height: ${buttonSize + buttonMargin}px;
	width: ${buttonSize + buttonMargin}px;
	background: ${colors.backgroundGrey};	
	border-radius: 100px;
	z-index: 0;

	&::after {
		content: "";
		position: absolute;
		height: ${buttonSize}px;
		width: ${buttonSize}px;
		top: 50%;
		left: 50%;
		border-radius: 100px;
		transform: translate(-50%, -50%);
		background: linear-gradient(to bottom, ${colors.blueGradientStart}, ${
  colors.blueGradientEnd
});
		z-index: -1;
		box-shadow: 0px 0px 8px ${colors.blueMidrange};
	}
`;

const PlusIcon = styles.svg`
	height: ${iconSize}px;
	width: ${iconSize}px;
	stroke: ${colors.white};
	stroke-width: 2px;
`;

export default ActionButton;
