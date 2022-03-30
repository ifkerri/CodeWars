function solveExpression(exp) {

    'use strict';

    //console.log(exp);

    const rune = '?';
    const arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrSign = ['+', '*', '-'];
    const equalPos = exp.indexOf('=');

    let posSign = -1;
    let sign = '';
    for (let index = 0; index < 3; ++index) {
        posSign = exp.lastIndexOf(arrSign[index]);
        if (posSign !== -1) {
            sign = arrSign[index];
            break;
        }
    }

    for (let i = 0; i < 10; ++i) {

        const newExp = exp.split(rune).join(arrNumber[i]);
        let left = parseInt(newExp.slice(0, posSign));
        let right = parseInt(newExp.slice(posSign + 1, equalPos));
        let result = parseInt(newExp.slice(equalPos + 1, newExp.length));

        if (sign == '+' && (left + right) === result && result != 0) {
            return arrNumber[i];
        } else if (sign == '-' && (left - right) === result && result != 0) {
            return arrNumber[i];
        } else if (sign == '*' && (left * right) === result && result != 0) {
            return arrNumber[i];
        }
    }

    return -1;

}

let result = solveExpression('?*1=??');