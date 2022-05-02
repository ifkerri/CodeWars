const validShip = (i, n, field, useShips) => {

    let sumX = buildShip('X', field, n);
    let sumY = buildShip('Y', field, i);

    console.log(`current ${i+1}:${n+1} - sumX: ${sumX} - sumY: ${sumY}`);

    if ((sumX > 0 && sumY > 0) || sumX > 4 || sumY > 4) {
        //return false;
    }
    
    return true;

};

const buildShip = (dir, field, pos) => {

    let sum = 0;
    if (pos != 0) {
        for (let iter = pos; iter < 0; iter--) {

            const value = dir == 'X' ? field[pos][iter] : field[iter][pos];
            if (value == 1) {
                sum += 1;
            } else {
                break;
            }
        }
    }

    for (let iter = pos; iter < 10; iter++) {
        const value = dir == 'X' ? field[pos][iter] : field[iter][pos];
        if (value == 1) {
            sum += 1;
        } else {
            break;
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