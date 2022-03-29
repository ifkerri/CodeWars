function solveExpression(exp) {

    'use strict';


    const rune = '?';
    const arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrSign = ['+', '-', '*'];
    const equalPos = exp.indexOf('=');

    let posSign = -1;
    let sign = '';
    for (let index = 0; index < 3; ++index) {
        posSign = exp.indexOf(arrSign[index]);
        if (posSign !== - 1) {
            sign = arrSign[index];
            break;
        }
    }

    //console.log(equalPos);
    //console.log(sign);

    for (let i = 0; i < 10; ++i){
        //let newExp = exp.replaceAll('?', arrNumber[i]);
        //let newExp = exp;
        //while (newExp.indexOf('?') !== - 1) {
        //    newExp = exp.replace('?', arrNumber[i]);
        //}
        //newExp = exp.replace(/:/g,"hi")
        const newExp = exp.split(rune).join(arrNumber[i]);
        console.log(newExp);
        let left = Number(newExp.slice(0, posSign));
        let right = Number(newExp.slice(posSign + 1, equalPos));
        let result = Number(newExp.slice(equalPos + 1, newExp.length));
        
        //console.log(arrNumber[i]);
        //console.log(left);
        //console.log(right);
        //console.log(left * right);
        //console.log('result' + result);
        //console.log((left + right) === result);

        if (sign == '+' && (left + right) === result) {
            return arrNumber[i];
        } else if (sign == '-' && (left - right) === result) {
            return arrNumber[i];
        } else if (sign == '*' && (left * right) === result) {
            return arrNumber[i];
        }
    }

    return -1;

}


let result = solveExpression('123*45?=5?088');
console.log(result);

//console.log(-50*-1);