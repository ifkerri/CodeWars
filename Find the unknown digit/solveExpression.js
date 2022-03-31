function solveExpression(exp) {

    'use strict';

    const rune = '?';
    const arrMainNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrNumber = arrMainNumber.filter(function (e) {
        return exp.indexOf(e) === -1;
    });
    const arrSign = ['+', '*', '--', '-'];
    const equalPos = exp.indexOf('=');
    const expWithoutEqual = exp.slice(0, equalPos);
    const expEqual = exp.slice(equalPos + 1, exp.length);
    const expEqualRunePos = expEqual.indexOf(rune);
    const expEqualSignPos = expEqual.indexOf('-');
    const passZero = expEqual.length > 1 && expEqualRunePos == 0 || (expEqualRunePos == 1 && expEqualSignPos == 0);

    let posSign = -1;
    let sign = '';
    for (let index = 0; index < arrSign.length; ++index) {
        posSign = expWithoutEqual.lastIndexOf(arrSign[index]);
        if (posSign !== -1) {
            sign = arrSign[index];
            break;
        }
    }

    for (let i = 0; i < arrNumber.length; ++i) {

        if (passZero && arrNumber[i] === 0) {
            continue;
        }

        const newExp = exp.split(rune).join(arrNumber[i]);
        let left = parseInt(newExp.slice(0, posSign));
        let right = parseInt(newExp.slice(posSign + 1, equalPos));
        let result = parseInt(newExp.slice(equalPos + 1, newExp.length));

        if (sign == '+' && (left + right) === result) {
            return arrNumber[i];
        } else if ((sign === '-' || sign === '--') && (left - right) === result) {
            return arrNumber[i];
        } else if (sign === '*' && (left * right) === result) {
            return arrNumber[i];
        }
    }

    return -1;

}

let result = solveExpression('-?56373--9216=-?47157');
console.log(result);