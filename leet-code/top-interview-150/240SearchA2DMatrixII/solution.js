/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let x = n-1;
    let y = 0;

    while (x >= 0 && y < m) {
        const value = matrix[y][x];

        if (value === target) {
            return true;
        }
        if (value > target) {
            x--;
        } else {
            y++;
        }
    }
    return false;
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20), 'ожидаем false');
console.log(searchMatrix([[5]], 5), 'ожидаем true')
console.log(searchMatrix([[1, 1]], 0), 'ожидаем false')
console.log(searchMatrix([[-1, 3]], 3), 'ожидаем true')