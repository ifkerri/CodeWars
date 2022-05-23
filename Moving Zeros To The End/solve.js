
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {

    const arrWithoutZero = arr.filter(item => {
        return item !== 0;
    });

    const arrZero = arr.filter(item => {
        return item === 0;
    });

    arrZero.forEach(e => {
        arrWithoutZero.push(e);    
    });

    return arrWithoutZero;

}