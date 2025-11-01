function mazeRunner(maze, map) {
    let runnerCoords = {
        x: null,
        y: null
    }
    let mapPosition = 0;
    let runnerStatus = null;

    const gameMethods = {
        findCoords(point) {
            let resultX = null;
            let resultY = null;
            for (let y = 0; y < maze.length; y++) {
                for (let x = 0; x < maze[y].length; x++) {
                    if (maze[y][x] === point) {
                        resultX = x;
                        resultY = y;
                        return {y:resultY, x:resultX};
                    }
                    if (resultX !== null) break;
                }
            }
            return  {y:resultY, x:resultX};
        },
        moveRunner(direction) {
            switch (direction) {
                case 'N':
                    runnerCoords.y--;
                    break;
                case 'S':
                    runnerCoords.y++;
                    break;
                case 'W':
                    runnerCoords.x--;
                    break;
                case 'E':
                    runnerCoords.x++;
                    break;
            }
        },
        checkStatus() {
            if (runnerCoords.x >= maze.length || runnerCoords.y >= maze.length || runnerCoords.x < 0 || runnerCoords.y < 0) {
                runnerStatus = 'Dead';
                console.log('YOU DIED');
                return runnerStatus;
            }
            switch (maze[runnerCoords.y][runnerCoords.x]) {
                case 3:
                    runnerStatus = 'Finish'
                    break;
                case 1:
                    runnerStatus = 'Dead'
                    break;
                default:
                    runnerStatus = 'On the way'
            }
            return runnerStatus;
        }
    };

    runnerCoords = gameMethods.findCoords(2);
    while (mapPosition < map.length && runnerStatus !== 'Dead' && runnerStatus !== 'Finish') {
        gameMethods.moveRunner(map[mapPosition]);
        gameMethods.checkStatus();
        mapPosition++;
    }
    if (runnerStatus === 'On the way') runnerStatus = 'Lost'
    return runnerStatus;
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
