// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  
  const result = [];
  if (words.length == 0) return [];

  for (let i = 0; i < words.length; i++) {
   
    const wordCheck = words[i];
    let wordMain = word;
    let need = true;

    for (j = 0; j < wordCheck.length; j++) {
      letter = wordCheck[j];

      if (wordMain.indexOf(letter) == -1) {
        need = false;
        break;
      }

      wordMain = wordMain.replace(letter, "");

    }

    if (need) result.push(wordCheck);

  }

  return result;
  
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // -- ['aabb', 'bbaa'] - good
