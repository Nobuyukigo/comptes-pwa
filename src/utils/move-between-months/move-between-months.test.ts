import moveBetweenMonths from './move-between-months';

test('go one year back when moving from january to december', () => {
  expect(moveBetweenMonths('2018-01', -1)).toBe('2017-12');
});

test('go one year forward when moving from december to january', () => {
  expect(moveBetweenMonths('2016-12', 1)).toBe('2017-01');
});

test('go one month backward when provided -1', () => {
  expect(moveBetweenMonths('2016-03', -1)).toBe('2016-02');
});

test('go one month forward when provided 1', () => {
  expect(moveBetweenMonths('2016-03', 1)).toBe('2016-04');
});
