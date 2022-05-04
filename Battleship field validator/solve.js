const validShip = (i, n, field, useShips) => {

    let sumX = buildShip(field, i, n, 'x');
    let sumY = buildShip(field, i, n, 'y');

    console.log(`current ${i+1}:${n+1} - sumX: ${sumX} - sumY: ${sumY}`);

    // if ((sumX > 0 && sumY > 0) || sumX > 4 || sumY > 4) {
    //     //return false;
    // }

    return true;

};

const buildShip = (field, posX, posY, dir) => {

    let sum = 0;

    if (dir == 'x') {

        for (let i = posY; i > 0; i--) {
            const value = field[posX][i];
            if (value == 1) {
                sum++;
            } else {
                break;
            }

        }

        for (let i = posY + 1; i < 9; i++) {
            const value = field[posX][i];
            if (value == 1) {
                sum++;
            } else {
                break;
            }
        }

        if (posY == 0) {
            sum++;
        }

    } else {

        for (let i = posX; i > 0; i--) {
            const value = field[i][posY];
            if (value == 1) {
                sum++;
            } else {
                break;
            }

        }

        for (let i = posX + 1; i < 9; i++) {
            const value = field[i][posY];
            if (value == 1) {
                sum++;
            } else {
                break;
            }
        }   

        if (posX == 0) {
            sum++;
        }

    }

    return sum;

};


function validateBattlefield(field) {

    const useShips = {
        one: 0,
        two: 0,
        three: 0,
        four: 0
    };

    for (let i = 0; i < field.length; i++) {

        const line = field[i];

        for (let n = 0; n < line.length; n++) {

            const currentCell = line[n];
            if (currentCell == 1) {
                if (!validShip(i, n, field, useShips)) {
                    return false;
                }
            }

        }


    }

    return true;

}

validateBattlefield(
    [
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);