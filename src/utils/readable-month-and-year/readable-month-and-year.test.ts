import readableMonthAndYear from './readable-month-and-year';

test('transforms 2018-02 to Février 2018', () => {
  expect(readableMonthAndYear('2018-02')).toBe('Février 2018');
});
