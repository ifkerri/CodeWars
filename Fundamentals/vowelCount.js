// Return the number (count) of vowels in the given string. 
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;

    const arr = ['a', 'e', 'i', 'o', 'u'];
    const word = str.toLowerCase().split('');
    word.forEach(item => {
        console.log(item);
        if (arr.indexOf(item) != -1) {
            vowelsCount++;
        }
    });

    return vowelsCount;

}

let count = getCount("abracadabra");
console.log(count); // 5 - good 