function sudoku(puzzle) {

    'use strict';

    for (let line = 0; line < 9; line++) {

        let arrOnLine = puzzle[line];

        for (let indexOnLine = 0; indexOnLine < 9; indexOnLine++) {

            let char = arrOnLine[indexOnLine];
            if (char !== 0) {
                continue;
            }

            // line table
            let charResult = arrOnLine.filter(item => item !== 0);

            // row table
            for (let i = 0; i < 9; i++) {
                AddResult(i, indexOnLine, charResult, puzzle);
            }

            let startLine, endLine, startRow, endRow;

            if (indexOnLine <= 2) {
                startRow = 0;
                endRow = 3;    
            } else if (indexOnLine > 2 && indexOnLine <= 5) {
                startRow = 3;
                endRow = 6;    
            } else {
                startRow = 6;
                endRow = 9;    
            }

            if (line <= 2) {
                startLine = 0;
                endLine = 3;    
            } else if (line > 2 && line <= 5) {
                startLine = 3;
                endLine = 6;    
            } else {
                startLine = 6;
                endLine = 9;    
            }

            // sqr table
            for (let n = startLine; n < endLine; n++) {
                for (let m = startRow; m < endRow; m++) {
                    AddResult(n, m, charResult, puzzle);
                }
            }

            let yes = charResult.length == 8;
            console.log('line: '+line+' indexOnLine: '+indexOnLine+' result: '+charResult 
                + ' linerow: ' + startLine + ','+ endLine + ','+ startRow + ','+ endRow+' YES='+yes);

        }

    }
}

function AddResult(n, m, arr, puzzle) {

    let char = puzzle[n][m];
    //console.log(char);
    if (char !== 0 && arr.indexOf(char) === -1) {
        arr.push(char);
    }

    //return arr;
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

sudoku(puzzle);