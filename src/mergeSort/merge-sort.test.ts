import mergeSort, { concatAndSort } from './merge-sort';

test('concatAndSort([3,9],[5])', () => {
  expect(concatAndSort([3, 9], [5])).toEqual([3, 5, 9]);
});

test('merge sorting array [9,2,4,7,4,3,10]', () => {
  const sampleArray = [9, 2, 4, 7, 4, 3, 10];
  expect(mergeSort(sampleArray)).toEqual([2, 3, 4, 4, 7, 9, 10]);
});
