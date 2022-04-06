
function sumPairs(ints, s) {

    'use strict';
  
    let min = ints.length;
    let obj = {i: 0, j: min, doIt: false};
    let numberUse = [];

    for (let i = 0; i < ints.length; i++) {

        let number = ints[i];
        if (numberUse.includes(number)) {
            continue;
        } else {
            numberUse.push(number);
        }

        const r = s - ints[i];
        min = ints.indexOf(r, i + 1);
        if (min == -1) {
            continue;
        }

        if (min < obj.j) {
            obj.i = i;
            obj.j = min;
            obj.doIt = true;
        }

        if (obj.i > min) {
            break;
        }

    }

    return obj.doIt ? [ints[obj.i], ints[obj.j]] : undefined;
}

console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));