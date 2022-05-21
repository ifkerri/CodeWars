
function validateBattlefield(field) {

    // основной объект хранения данных по используемым кораблям
    // в процессе сборки данных, проверяем каждый корабль. Если он не подходит по условия - проверка заканчивается досрочно
    // если в процессе сборки ошибок не обнаружено, тогда выполняем общую проверку на количество кораблей на поле
    const ships = {
        pos: [], // массив координат всех кораблей
        posBorder: [], // массив координат диагональных границ
        count: { //  хранилище количества кораблей в разрезе категорий
            one: 0,
            two: 0,
            three: 0,
            four: 0
        },
        createPosBorderArray: (resultX, resultY) => {
            
            return `[${resultX.start - 1}:${resultY.start - 1}]-[${resultX.start - 1}:${resultY.start + 1}]-[${resultX.end + 1}:${resultY.end - 1}]-[${resultX.end + 1}:${resultY.end + 1}]`.split('-');

        },
        runBuild: (field) => {
            
            for (let posX = 0; posX < 9; posX++) {
                for (let posY = 0; posY < 9; posY++) {
                    const cellValue = field[posX][posY];
                    if (cellValue !== 1) {
                        continue;
                    }
                    let result = ships.buildShip(field, posX, posY, ships);
                    if (!result) {
                        return false; // в процессе сборки выявлены ошибки
                    }
                }
            }
            return true; // сборка выполнена успешно
        },
        buildShip: (field, posX, posY, ships) => {

            // вычисляем данные кораблика по осям
            let resultX = ships.buildShipX(field, posX, posY);
            let resultY = ships.buildShipY(field, posX, posY);
        
            // проверка на корректность размера корабля (размеры от 1 до 4)
            // если хотя бы один корабль имеет размер по любой оси более допустимого, то поле для игры заполнено неверно
            if (!ships.sizeValid([resultX.size, resultY.size])) {
                return false;
            }
        
            // проверка на корректность размера корабля по каждой оси относительно друг друга (допускаются только плоские корабли)
            // если хотя бы один корабль имеет размер по оси более допустимого относительно другой оси, то поле для игры заполнено неверно
            if (!ships.sizePosValid(resultX.size, resultY.size)) {
                return false;
            }
        
            // корабль подходит по размерам, добавляем его в список кораблей (если он еще не был добавлен)
            // помимо этого проверяем границы по диагонали от начала и конца корабля (остальные ячейки не учитываем, т.к. корабль бы не прошел по размеру)
            const posXY = `[${resultX.start}:${resultY.start}]-[${resultX.end}:${resultY.end}]`; // общие координаты
            const posStart = `[${resultX.start}:${resultY.start}]`; // координаты начала корабля
            const posEnd = `[${resultX.end}:${resultY.end}]`; // координаты конца корабля
            const posBorderArray = ships.createPosBorderArray(resultX, resultY); // массив координат диагональных границ
            const nameSize = ships.nameSize(Math.max(resultX.size, resultY.size)); // имя свойства, которое отвечает за накопление количества используемых кораблей
            if (!ships.add(posXY, posStart, posEnd, posBorderArray, nameSize)) {
                return false;
            }
        
            // корабль собран и добавлен в нашу мини БД
            // возвращаем отметку об успешности проверки данных корабля
            return true;
        
        },
        buildShipX: (field, posX, posY) => {

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
        
        },
        buildShipY: (field, posX, posY) => {

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
        add: (posXY, posX, posY, posBorderArray, nameSize) => {
            if (ships.pos.indexOf(posXY) == -1) {
                ships.pos.push(posXY);
                ships.count[nameSize]++;
                if (ships.posBorder.indexOf(posX) !== -1 || ships.posBorder.indexOf(posY) !== -1) {
                    return false; //
                } else {
                    for (let i = 0; i < posBorderArray.length; i++) {
                        ships.posBorder.push(posBorderArray[i]);
                    }
                }
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

    // все корабли собраны!!
    return ships.countValid();

}

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
//     ])); // goood = true

// console.log(validateBattlefield([
//     [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ])); // goood = false