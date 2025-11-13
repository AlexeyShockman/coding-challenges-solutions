// Понравилась задача. Несколько раз корректировал решение, так как сразу не предусмотрел некоторые моменты.

const { compareInConsole } = require('../../../utils/console.js');

function solution(input) {

    const cells = new Set(
        input
            .split(',')
            .map(str => str.length === 2 ? Number(str) : null)
            .filter(n => Number.isInteger(n) && n >= 0 && n <= 99)
    );

    // showMatrix(cells);

    if (cells.size === 0) return 0;

    let maxCellSize = 1;
    const visited = new Set;

    const directions = [ // направление и проверка выхода за границы поля
        { d: 1, borderCheck: (n) => n % 10 !== 9 }, // вправо
        { d: -1, borderCheck: (n) => n % 10 !== 0 }, // влево
        { d: 10, borderCheck: (n) => n + 10 <= 99 }, // вверх
        { d: -10, borderCheck: (n) => n - 10 >= 0 }, // вниз
    ];

    function dfs (startPoint) {
        let waitingForWatch = [startPoint];
        let figureSize = 0;

        while (waitingForWatch.length > 0) {
            const cell = waitingForWatch.pop();
            figureSize++;
            visited.add(cell);

            for (const {d, borderCheck} of directions) {
                if (borderCheck(cell)) {
                    const next = cell + d;
                    if (cells.has(next) && !visited.has(next)) {
                        visited.add(next);
                        waitingForWatch.push(next);
                    }
                }
            }

        }

        return figureSize;
    }

    for (const cell of cells) {
        const size = dfs(cell);
        if (size > maxCellSize) maxCellSize = size;
    }

    return maxCellSize;
}


const testIsActive = true;
compareInConsole(3, solution, ['18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'], testIsActive, 'one repeated cell');
compareInConsole(6, solution, ['18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,46'], testIsActive, 'bigger area');
compareInConsole(3, solution, ['18,00,01,02,95,40,36,26,57,48,54,65,76,87,97,47,00'], testIsActive, 'multiple maximums');
compareInConsole(1, solution, ['18'], testIsActive, 'bigger area');
compareInConsole(0, solution, [''], testIsActive, 'no cells');
compareInConsole(0, solution, ['1,a1,-10,100'], testIsActive, 'no valid cells');
compareInConsole(3, solution, ['18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,98,910,911,912,92,93'], testIsActive, 'with invalid cells');
compareInConsole(39, solution, ['51,02,31,90,81,23,78,36,99,15,13,64,06,15,02,10,78,73,27,74,97,99,72,84,13,40,47,76,83,81,93,17,30,20,59,76,46,85,44,18,48,95,78,90,78,03,32,92,53,72,54,05,60,49,37,93,17,96,28,15,65,38,26,67,17,78,99,37,48,01,76,67,41,21,43,24,00,34,06,08,01,34,57,79,97,91,82,85,77,56,09,30,71,34,79'], testIsActive, 'hard level');



// для отладки мне помогала визуализация поля :
// console.log(solution('18,19,95,40,36,26,57,48,54,65,76,87,97,47,00'))
// console.log(solution('00, 01, 10, 20'))
// console.log(solution('00,01,02,03,10,11,12,13,20,21,22,23,40,41,42,43,34,00,01,02,'))
// console.log(solution('51,02,31,90,81,23,78,36,99,15,13,64,06,15,02,10,78,73,27,74,97,99,72,84,13,40,47,76,83,81,93,17,30,20,59,76,46,85,44,18,48,95,78,90,78,03,32,92,53,72,54,05,60,49,37,93,17,96,28,15,65,38,26,67,17,78,99,37,48,01,76,67,41,21,43,24,00,34,06,08,01,34,57,79,97,91,82,85,77,56,09,30,71,34,79'))
// console.log(solution('00,01,02,03,05,06,08,09,10,13,15,17,18,20,21,23,24,26,27,28,30,31,32,34,36,37,38,40,41,43,44,46,47,48,49,51,53,54,56,57,59,60,67,71,72,73,74,76,77,78,79,81,82,83,84,85,90,91,92,93,95,96,97,99'))


function showMatrix (matrix) {
    console.log('    [0|1|2|3|4|5|6|7|8|9]')
    for (let i = 9; i >= 0; i--) {
        let row = `[${i}0] `;
        for (let j = 0; j < 10; j++) {
            const num = i * 10 + j;
            const isFilled = matrix.has(num);
            row += isFilled ? 'X ' : '. ';
        }
        console.log(row);
    }
}

