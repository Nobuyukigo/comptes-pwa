import getFirstName from './get-first-name';

test('get the first name when provided a full name', () => {
  expect(getFirstName('Geoffrey Chen')).toBe('Geoffrey');
  expect(getFirstName('Orane Lo Luen Chung')).toBe('Orane');
});
