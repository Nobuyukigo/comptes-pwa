import styles from 'styled-components';

export const colors = {
  blueGradientStart: '#2558FF',
  blueGradientEnd: '#09DAD9',
  darkBlue: '#809BC2',
  blueGray: '#9BAEB2',
  blueMidrange: '#0FC0E0',
  white: '#fff',
  backgroundGrey: '#F1F5FA',
  listSeparator: '#DFE4E9',
  separatorText: '#868A8D',
  onPress: '#F3F3F3',
  body: '#626262',
  warning: '#FF6868',
  cardTitle: '#636363',
  stackOne: '#20B7F1',
  stackTwo: '#6FD8EE',
  facebook: '#3b5998'
};

export const ScreenWrapper = styles.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const MainContent = styles.main`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	height: 100%;
`;
