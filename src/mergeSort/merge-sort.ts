function mergeSort<T>(collection: Iterable<T>): T[] {
  const array = Array.from(collection);

  return recursiveSplit(array);
}

function recursiveSplit<T>(array: T[]): T[] {
  // Base cases
  if (array.length < 2) {
    return array;
  } else if (array.length === 2) {
    if (array[0] < array[1]) {
      return array;
    } else {
      return [array[1], array[0]];
    }
  }

  // split in half (left side potentially larger) and
  const half = Math.ceil(array.length / 2);
  const leftSideSorted = recursiveSplit(array.slice(0, half));
  const rightSideSorted = recursiveSplit(array.slice(half));

  return concatAndSort(leftSideSorted, rightSideSorted);
}

export function concatAndSort<T>(arrayA: T[], arrayB: T[]): T[] {
  const finalSize = arrayA.length + arrayB.length;
  const finalSortedArray: T[] = [];

  for (let i = 0, iA = 0, iB = 0; i < finalSize; i++) {
    if (iA < arrayA.length && (!arrayB[iB] || arrayA[iA] <= arrayB[iB])) {
      finalSortedArray.push(arrayA[iA]);
      iA++;
    } else if (iB < arrayB.length) {
      finalSortedArray.push(arrayB[iB]);
      iB++;
    }
  }

  return finalSortedArray;
}

export default mergeSort;
