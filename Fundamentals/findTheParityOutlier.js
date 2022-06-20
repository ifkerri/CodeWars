
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
    
    let even = [];
    let odd = [];

    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 == 0) {
            even.push(integers[i]);
        } else {
            odd.push(integers[i]);
        }
    }

    if (even.length > 1) {
        mode = 'even';
    } else {
        mode = 'odd';
    }

    return integers.find(item => {
        if (mode === 'even') {
            return item % 2 != 0
        } else {
            return item % 2 == 0
        }
    });

}

console.log(findOutlier([0, 1, 2])) // 1 - good
console.log(findOutlier([1, 2, 3])) // 2 - good