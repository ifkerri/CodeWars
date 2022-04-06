
function sumPairs(ints, s) {

    'use strict';

    let min = ints.length;
    let result;

    for (let i = 0; i < ints.length; i++) {

        const r = s - ints[i];

        //console.log('i='+i+' r='+r);
        //console.log(-6-1);

        min = ints.indexOf(r, i);
        if (min == -1) {
            continue;
        } else {
            if (min != i) {
                result = [ints[i], ints[min]];
            } else {
                break;
            }
        }

        if (i > min) {
            break;
        }

    }

    return result;
}

//console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));