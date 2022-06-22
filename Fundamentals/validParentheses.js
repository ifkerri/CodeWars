// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100

function validParentheses(parens) {

    const arr = parens.split('');
    return findAndCute(arr, arr[0]);

}

function findAndCute(arr, bracket) {

    if (arr.length == 0) {
        return true;
    }

    if (arr[0] == ')' || arr[arr.length - 1] == '(') {
        return false;
    }

    const index = arr.indexOf(bracket == ')' ? '(' : ')');

    if (index == -1) {
        return false;
    } else {
        arr.splice(index, 1);
        arr.splice(0, 1);
        return findAndCute(arr, arr[0]);
    }

}

console.log(validParentheses("(")); // false - good
console.log(validParentheses("())")); // false - good