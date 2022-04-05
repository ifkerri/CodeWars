
function validSolution(board) {
  
    'use strict';

    let checSum = arrSum(board[0]);
    let sumGrids1 = 0, 
        sumGrids2 = 0, 
        sumGrids3 = 0;
    
    for (let i = 0; i < board.length; ++i) {
      
      let rowPos = i + 1;
      let arr1 = board[i].slice(0,3), arr2 = board[i].slice(3,6), arr3 = board[i].slice(6,9);    
      sumGrids1 += arrSum(arr1);
      sumGrids2 += arrSum(arr2);
      sumGrids3 += arrSum(arr3);
      
      if (rowPos % 3 == 0) {
        if (checSum != sumGrids1 || checSum != sumGrids2 || checSum != sumGrids3) {
          return false;
        } else {
          sumGrids1 = 0;
          sumGrids2 = 0;
          sumGrids3 = 0;
        } 
      }
      
    }
    
    return true;
    
  }
  
  function arrSum(arr) {
    
    let result = 0;
    for (let i = 0; i < arr.length; ++i) {
      result += arr[i];  
    }
    
    return result;
  }

  let board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]; // true

  console.log(validSolution());