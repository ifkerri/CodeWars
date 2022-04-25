

var decodeBits = function(bits) {
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    //return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
  
  let arrMorseCode = [];
  //console.log(bits.length);  

  for (let i = 0; i < bits.length; i++) {
    
    let tripleSet = bits.slice(i, i + 3);
    if (tripleSet === '111') {
        arrMorseCode.push('-');
        i += 3;
        continue;
    } else if (tripleSet === '000') {
        arrMorseCode.push(' ');
        i += 3;
        continue;   
    }

    let set = bits[i];

    if (set === '1') {
        arrMorseCode.push('.');
    } else if (set === '0') {
        arrMorseCode.push('');
    }

    //arrMorseCode.push(tripleSet);
    //console.log(tripleSet);
    //break;
    
  }
  
  return arrMorseCode.join('');
};

console.log(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'));
//console.log('hello');