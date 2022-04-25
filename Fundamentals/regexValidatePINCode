
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {

    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let result = true;
    for (let i = 0; i < pin.length; i++) {
        if (arr.indexOf(pin[i]) == -1) {
            result = false;
            break;
        }   
            
    }

    return result && (pin.length == 4 || pin.length == 6);
    
}

console.log(validatePIN("1")); //false - good
console.log(validatePIN("1234")); //true - good
console.log(validatePIN('-1.234')); //false - good
