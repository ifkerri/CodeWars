
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    
    return str.trim().split(' ').map(word => {
        if (word == '!' || word == '.' || word == ',' || word == '?' || word == ':' || word == ';') {
            return word;
        }
        const arr = word.split('');
        const letter = arr[0];
        arr.splice(0, 1);
        arr.push(letter);
        arr.push('ay');
        return arr.join('');
    }).join(' ');
    
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('O tempora o mores !'));