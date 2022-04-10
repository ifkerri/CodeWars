let recoverSecret = function (triplets) {

    'use strict';

    let arr = [];

    for (let i = 0; i < triplets.length; i++) {

        let a = triplets[i][0]; let aPos = arr.indexOf(a); let aFind = aPos != -1;
        let b = triplets[i][1]; let bPos = arr.indexOf(b); let bFind = bPos != -1;
        let c = triplets[i][2]; let cPos = arr.indexOf(c); let cFind = cPos != -1;

        if (!aFind && !bFind && !cFind) {
            arr.push(a);
            arr.push(b);
            arr.push(c);
            continue;
        }

        if (!aFind) {
            arr.push(a);
        }

        if (!bFind && aFind) {

             

        }

    }

};


const triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
];

console.log(recoverSecret(triplets1));