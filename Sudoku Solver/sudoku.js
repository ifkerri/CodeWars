function sudoku(puzzle) {

    'use strict';
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let next = false;

    for (let line = 0; line < 9; line++) {
        for (let row = 0; row < 9; row++) {

            let char = puzzle[line][row];
            if (char !== 0) {
                continue;
            }

            // line table
            let result = puzzle[line].filter(item => item !== 0);

            // row table
            for (let i = 0; i < 9; i++) {
                AddResult(i, row, result, puzzle);
            }

            // sqr table
            const sqrPos = SqrPos(line, row);
            for (let n = sqrPos.startLine; n < sqrPos.endLine; n++) {
                for (let m = sqrPos.startRow; m < sqrPos.endRow; m++) {
                    AddResult(n, m, result, puzzle);
                }
            }

            if (result.length == 8) {
                for (let i = 0; i < arr.length; i++) {
                    if (result.indexOf(arr[i]) == -1) {
                        puzzle[line][row] = arr[i];
                        next = true;
                        break;
                    }
                }
            }

        }

    }

    return next ? sudoku(puzzle) : puzzle;

}

function AddResult(n, m, arr, puzzle) {

    const char = puzzle[n][m];
    if (char !== 0 && arr.indexOf(char) === -1) {
        arr.push(char);
    }

}

function SqrPos(line, row) {

    let obj = {
        startLine: 0,
        endLine: 0,
        startRow: 0,
        endRow: 0,    
    };

    if (line <= 2) {
        obj.startLine = 0;
        obj.endLine = 3;    
    } else if (line > 2 && line <= 5) {
        obj.startLine = 3;
        obj.endLine = 6;    
    } else {
        obj.startLine = 6;
        obj.endLine = 9;    
    }

    if (row <= 2) {
        obj.startRow = 0;
        obj.endRow = 3;    
    } else if (row > 2 && row <= 5) {
        obj.startRow = 3;
        obj.endRow = 6;    
    } else {
        obj.startRow = 6;
        obj.endRow = 9;    
    }

    return obj;

}

let puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(sudoku(puzzle));