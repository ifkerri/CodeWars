//You will be given an array of numbers. 
//You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {

    const oddArr = array.filter(item => item % 2 != 0);
    oddArr.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item % 2 != 0) {
            continue;
        }
        oddArr.splice(i, 0, item);
    }

    return oddArr;

}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // good - [1, 3, 2, 8, 5, 4])