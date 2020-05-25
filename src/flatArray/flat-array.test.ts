import flatArray from './flat-array';

test('already flat array', () => {
  expect(flatArray(['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
});

test('simple one level array', () => {
  expect(flatArray(['a', 'b', ['c', 'd'], 'e', ['f'], 'g'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
});

test('many levels', () => {
  expect(flatArray(['a', 'b', ['2c', ['3d', '3e', '3f'], '2g'], 'h', ['2i']])).toEqual(['a', 'b', '2c', '3d', '3e', '3f', '2g', 'h', '2i']);
});

test('empty array', () => {
  expect(flatArray([])).toEqual([]);
})