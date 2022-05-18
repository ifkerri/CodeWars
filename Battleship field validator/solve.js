const buildShip = (field, posX, posY, ships) => {

    // вычисляем данные кораблика
    let resultX = buildShipX(field, posX, posY);
    let resultY = buildShipY(field, posX, posY);

    // проверка расчета данных кораблика
    console.log(`current ${posX+1}:${posY+1}-sumX:${resultX.sum}-sumY:${resultY.sum} / pos:[${resultX.start}][${resultX.end}]-[${resultY.start}][${resultY.end}] / size ${resultX.size}:${resultY.size}`);

    // проверка на корректность размера корабля 
    // если хотя бы один корабль имеет размер по любой оси более допустимого, то поле для игры заполнено неверно
    if (!ships.sizeValid([resultX.size, resultY.size])) {
        return false;
    }

    // проверка на корректность размера корабля по каждой оси относительно друг друга
    // если хотя бы один корабль имеет размер по оси более допустимого относительно другой оси, то поле для игры заполнено неверно
    if (!ships.sizePosValid(resultX.size, resultY.size)) {
        return false;
    }

    // корабль подходит по размерам, добавляем его в список кораблей
    const posXY = `[${resultX.start}][${resultX.end}]-[${resultY.start}][${resultY.end}]`;
    const maxSize = Math.max(resultX.size, resultY.size);
    ships.add(posXY, ships.nameSize(maxSize));

    console.log(ships.pos);
    console.log(ships.count);

    // возвращаем отметку об успешности проверки данных корабля
    return true;

};

const buildShipX = (field, posX, posY) => {

    const result = {
        sum: 0,
        start: posY,
        end: posY,
        size: 0
    };

    for (let i = posY; i >= 0; i--) {
        const value = field[posX][i];
        if (value == 1) {
            result.sum++;
            result.start = i;
        } else {
            break;
        }

    }

    for (let i = posY + 1; i < 9; i++) {
        const value = field[posX][i];
        if (value == 1) {
            result.sum++;
            result.end = i;
        } else {
            break;
        }
    }

    result.size = result.end - result.start + 1;
    return result;

};

const buildShipY = (field, posX, posY) => {

    const result = {
        sum: 0,
        start: posX,
        end: posX,
        size: 0
    };

    for (let i = posX; i >= 0; i--) {
        const value = field[i][posY];
        if (value == 1) {
            result.sum++;
            result.start = i;
        } else {
            break;
        }

    }

    for (let i = posX + 1; i < 9; i++) {
        const value = field[i][posY];
        if (value == 1) {
            result.sum++;
            result.end = i;
        } else {
            break;
        }
    }

    result.size = result.end - result.start + 1;
    return result;

};

function validateBattlefield(field) {

    const ships = {
        pos: [],
        count: {
            one: 0,
            two: 0,
            three: 0,
            four: 0
        },
        sizeValid: (sizes) => {
            for (let i = 0; i < sizes.length; i++) {
                return sizes[i] > 4 ? false : true;
            }
        },
        sizePosValid: (sizeX, sizeY) => {
            return !(sizeX > 1 && sizeY > 1);
        },
        nameSize: (maxSize) => {
            switch (maxSize) {
                case 1:
                    return 'one';
                case 2:
                    return 'two';
                case 3:
                    return 'three';
                case 4:
                    return 'four';
            }
        },
        add: (posXY, nameSize) => {
            if (ships.pos.indexOf(posXY) == -1) {
                ships.pos.push(posXY);
                ships.count[nameSize]++;
            }
        }
    };

    for (let posX = 0; posX < 9; posX++) {

        for (let posY = 0; posY < 9; posY++) {

            const currentCellValue = field[posX][posY];
            if (currentCellValue !== 1) {
                continue;
            }

            let result = buildShip(field, posX, posY, ships);
            if (!result) {
                return false;
            }

        }

    }

    // все корабли собраны

    return true;

}

console.log(validateBattlefield(
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
    ]));