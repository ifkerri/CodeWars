//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
//the longest possible, containing distinct letters - 
//each taken only once - coming from s1 or s2.

function longest(s1, s2) {

    const arr = [];
    const result = s1 + s2;
    for (let i = 0; i < result.length; i++) {
        if (arr.indexOf(result[i]) == -1) {
            arr.push(result[i]);
        }
    }

    return arr.sort().join('');

}

console.log(longest("aretheyhere", "yestheyarehere")); //good - "aehrsty"
