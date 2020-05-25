import removeDuplicates from './remove-duplicates';

test('simple two chars tokens', () => {
  expect(removeDuplicates('aa bb cc dd ee aa bb')).toEqual('aa bb cc dd ee');
});

test('string of numbers', () => {
  expect(removeDuplicates('1 2 3 4 5 2 3')).toEqual('1 2 3 4 5');
});

test('empty string', () => {
  expect(removeDuplicates('')).toEqual('');
});

test('one element', () => {
  expect(removeDuplicates('justme')).toEqual('justme');
});