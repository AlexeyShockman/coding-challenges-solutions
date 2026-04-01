/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findDiagonalOrder(mat)  {

    const m = mat.length;
    const n = mat[0].length

    let dir = 1; // Будем считать, что это движение вверх и вправо. А -1 это движение вниз и влево
    let coordX = 0;
    let coordY = 0;
    let result = [];

    for (let i = 0; i < m * n; i++) {
        result.push(mat[coordY][coordX]);

        // найти край при движении вверх и вправо
        if ((coordY === 0 || coordX === n-1) && dir === 1) {
            dir = -1;

            if (coordX === n-1) {
                coordY+= 1;
            } else {
                coordX+= 1;
            }

            continue;
        }

        // найти край при движении вниз и влево
        if ((coordY === m-1 || coordX === 0) && dir === -1) {
            dir = 1;

            if (coordY === m-1) {
                coordX+= 1;
            } else {
                coordY+= 1;
            }

            continue;
        }

        coordX += dir;
        coordY += -dir;

    }

    return result;
}

