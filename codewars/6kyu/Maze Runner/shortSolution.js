// Мне понравилась лаконичность решения при хорошей читаемости
// Понятно, что в своем решении я поигрался с геймофикацией, но то, что решение в три раза длиннее говорит о том,
// что лучше более лаконично решать

function mazeRunner(maze, directions) {
    // Найти стартовые координаты (2)
    let y = maze.findIndex(row => row.includes(2));
    let x = maze[y].indexOf(2);

    for (const dir of directions) {
        if (dir === 'N') y--;
        if (dir === 'S') y++;
        if (dir === 'W') x--;
        if (dir === 'E') x++;

        // Выход за пределы карты
        if (!maze[y] || maze[y][x] === undefined) return 'Dead';

        // Проверяем ячейку
        const cell = maze[y][x];
        if (cell === 1) return 'Dead';
        if (cell === 3) return 'Finish';
    }

    return 'Lost';
}

// tests
const maze =
    [[1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 3],
        [1, 0, 1, 0, 1, 0, 1],
        [0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 2, 1, 0, 1, 0, 1]];

let map1 = ["N","N","N","N","N","E","E","E","E","E"] //finish
let map2 = ["N","N","N","N","N","E","E","S","S","S","S","S","S"] //dead
let map3 = ["N","E","E","E","E"] //lost
let map4 = ["N","N","N","N","N","E","E","E","E","E","W","W"] //

console.log('result:', mazeRunner(maze, map1), 'expected: FINISH')
console.log('result:', mazeRunner(maze, map2), 'expected: DEAD')
console.log('result:', mazeRunner(maze, map3), 'expected: LOST')
console.log('result:', mazeRunner(maze, map4), 'expected: FINISH')
