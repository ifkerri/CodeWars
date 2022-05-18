const buildShip = (field, posX, posY, ships) => {

    // вычисляем данные кораблика
    const arrCell = [];
    let resultX = buildShipX(field, posX, posY, arrCell);
    let resultY = buildShipY(field, posX, posY, arrCell);

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

    console.log(arrCell);
    console.log(ships.useCell);

    // корабль подходит по размерам, добавляем его в список кораблей
    // попутно заполняем все ячейки, которые занимает данный корабль вместе с границами
    // если наш корабль использует уже занятые ячейки, то выбрасываем ошибку
    const posXY = `[${resultX.start}][${resultX.end}]-[${resultY.start}][${resultY.end}]`;
    const maxSize = Math.max(resultX.size, resultY.size);
    if (!ships.add(posXY, arrCell, ships.nameSize(maxSize))) {
        return false;
    }

    // console.log(arrCell);
    // console.log(ships.useCell);

    // возвращаем отметку об успешности проверки данных корабля
    return true;

};

const buildShipX = (field, posX, posY, arrCell) => {

    const result = {
        sum: 0,
        start: posY,
        end: posY,
        size: 0
    };

    for (let i = posY; i >= 0; i--) {
        const value = field[posX][i];
        if (value == 1) {
            addCell(`[${posX}:${i}]`, arrCell);
            addCell(`[${posX}:${i + 1}]`, arrCell);
            addCell(`[${posX}:${i - 1}]`, arrCell);
            addCell(`[${posX}:${i + 1}]`, arrCell);
            addCell(`[${posX}:${i - 1}]`, arrCell);
            addCell(`[${posX + 1}:${i}]`, arrCell);
            addCell(`[${posX + 1}:${i + 1}]`, arrCell);
            addCell(`[${posX + 1}:${i - 1}]`, arrCell);
            addCell(`[${posX - 1}:${i}]`, arrCell);
            addCell(`[${posX - 1}:${i + 1}]`, arrCell);
            addCell(`[${posX - 1}:${i - 1}]`, arrCell);
            result.sum++;
            result.start = i;
        } else {
            break;
        }

    }

    for (let i = posY + 1; i < 9; i++) {
        const value = field[posX][i];
        if (value == 1) {
            addCell(`[${posX}:${i}]`, arrCell);
            addCell(`[${posX}:${i + 1}]`, arrCell);
            addCell(`[${posX}:${i - 1}]`, arrCell);
            addCell(`[${posX}:${i + 1}]`, arrCell);
            addCell(`[${posX}:${i - 1}]`, arrCell);
            addCell(`[${posX + 1}:${i}]`, arrCell);
            addCell(`[${posX + 1}:${i + 1}]`, arrCell);
            addCell(`[${posX + 1}:${i - 1}]`, arrCell);
            addCell(`[${posX - 1}:${i}]`, arrCell);
            addCell(`[${posX - 1}:${i + 1}]`, arrCell);
            addCell(`[${posX - 1}:${i - 1}]`, arrCell);
            result.sum++;
            result.end = i;
        } else {
            break;
        }
    }

    result.size = result.end - result.start + 1;
    return result;

};

const buildShipY = (field, posX, posY, arrCell) => {

    const result = {
        sum: 0,
        start: posX,
        end: posX,
        borderStart: posX,
        borderEnd: posX,
        size: 0
    };

    for (let i = posX; i >= 0; i--) {
        const value = field[i][posY];
        if (value == 1) {
            addCell(`[${i}:${posY}]`, arrCell);
            addCell(`[${i}:${posY + 1}]`, arrCell);
            addCell(`[${i}:${posY - 1}]`, arrCell);
            addCell(`[${i + 1}:${posY}]`, arrCell);
            addCell(`[${i + 1}:${posY + 1}]`, arrCell);
            addCell(`[${i + 1}:${posY - 1}]`, arrCell);
            addCell(`[${i - 1}:${posY}]`, arrCell);
            addCell(`[${i - 1}:${posY + 1}]`, arrCell);
            addCell(`[${i - 1}:${posY - 1}]`, arrCell);
            result.sum++;
            result.start = i;
        } else {
            break;
        }

    }

    for (let i = posX + 1; i < 9; i++) {
        const value = field[i][posY];
        if (value == 1) {
            addCell(`[${i}:${posY}]`, arrCell);
            addCell(`[${i}:${posY + 1}]`, arrCell);
            addCell(`[${i}:${posY - 1}]`, arrCell);
            addCell(`[${i + 1}:${posY}]`, arrCell);
            addCell(`[${i + 1}:${posY + 1}]`, arrCell);
            addCell(`[${i + 1}:${posY - 1}]`, arrCell);
            addCell(`[${i - 1}:${posY}]`, arrCell);
            addCell(`[${i - 1}:${posY + 1}]`, arrCell);
            addCell(`[${i - 1}:${posY - 1}]`, arrCell);
            result.sum++;
            result.end = i;
        } else {
            break;
        }
    }

    result.borderStart = result.start == 0 ? -1 : result.start - 1;
    result.borderEnd = result.end == 8 ? -1 : result.end + 1;
    result.size = result.end - result.start + 1;
    return result;

};

const addCell = (cell, arr) => {
    if (arr.indexOf(cell) == -1) {
        arr.push(cell);
    }
};

function validateBattlefield(field) {

    // основной объект хранения данных по используемым кораблям
    // в процессе сборки данных, проверяем каждый корабль. Если он не подходит по условия - выбрасываем false
    // если в процессе сборки ошибок не обнаружено, тогда выполняем общую проверку на количество кораблей на поле
    const ships = {
        pos: [],
        useCell: [],
        count: {
            one: 0,
            two: 0,
            three: 0,
            four: 0
        },
        runBuild: (field) => {
            for (let posX = 0; posX < 9; posX++) {
                for (let posY = 0; posY < 9; posY++) {
                    const currentCellValue = field[posX][posY];
                    if (currentCellValue !== 1) {
                        continue;
                    }
                    let result = buildShip(field, posX, posY, ships);
                    if (!result) {
                        return false; // в процессе сборки выявлены ошибки
                    }
                }
            }
            return true; // сборка выполнена успешно
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
        add: (posXY, arrCell, nameSize) => {
            if (ships.pos.indexOf(posXY) == -1) {
                ships.pos.push(posXY);
                ships.count[nameSize]++;
                arrCell.forEach(e => {
                    if (ships.useCell.indexOf(e) !== -1) {
                        return false;
                    } else {
                        ships.useCell.push(e);
                    }
                });
            }

            return true;
        },
        countValid: () => {
            return ships.count.one == 4 && ships.count.two == 3 && ships.count.three == 2 && ships.count.four == 1;
        }
    };

    if (!ships.runBuild(field)) {
        return false;
    }

    // все корабли собраны

    return ships.countValid();

}

// goood
// console.log(validateBattlefield(
//     [
//         [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//         [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//         [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//         [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//         [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     ]));

console.log(validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]));