// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

const snail = function (array) {
  const result = [],
    size = array[0].length;

  if (size == 0) return result;

  pushElemRight(result, array[0], 0, 3);
  pushElemRight(result, array[1], 3, 3);
  pushElemRight(result, array[2], 3, 3);
  pushElemRight(result, array[3].reverse(), 0, 3);
  pushElemRight(result, array[2], 0, 0);
  pushElemRight(result, array[1], 0, 2);
  pushElemRight(result, array[2].reverse(), 1, 2);

  return result;
};

function pushElemRight(result, arr, start, end) {
  for (let i = start; i <= end; i++) {
    result.push(arr[i]);
  }
}


console.log(
  snail([
    [1, 2, 3, 4],
    [5, 21, 22, 11],
    [6, 13, 24, 15],
    [7, 8, 9, 18],
  ])
); // good - [1, 2, 3, 4, 11, 15, 18, 9, 8, 7, 6, 5, 21, 22, 24, 13])
