const { compareInConsole } = require('../../../utils/console.js');

function isSortedAndHow(array, direction = 0) {
    for (let i = 1; i < array.length; i++) {

        if (array[i-1] === array[i]) continue;

        const currentDir = array[i-1] < array[i] ? 1 : -1;

        if (direction === 0) {
            direction = currentDir;
            continue;
        }

        if (direction !== currentDir) return ANSWERS.no;
    }

    return direction === 1 ? ANSWERS.yesUp : ANSWERS.yesDown;
}


const ANSWERS = {
    yesUp: 'yes, ascending',
    yesDown: 'yes, descending',
    no: 'no',
}


const testIsActive = true;
compareInConsole(ANSWERS.no, isSortedAndHow, [[1, 3, 9, 4]], testIsActive);
compareInConsole(ANSWERS.no, isSortedAndHow, [[4, 3, 1, 9]], testIsActive);
compareInConsole(ANSWERS.yesUp, isSortedAndHow, [[1, 2]], testIsActive);
compareInConsole(ANSWERS.yesDown, isSortedAndHow, [[2, 1]], testIsActive);
compareInConsole(ANSWERS.yesUp, isSortedAndHow, [[1, 2, 3, 4]], testIsActive);
compareInConsole(ANSWERS.yesUp, isSortedAndHow, [[1, 1, 2, 3]], testIsActive);
compareInConsole(ANSWERS.yesUp, isSortedAndHow, [[1, 2, 3, 3]], testIsActive);
compareInConsole(ANSWERS.yesDown, isSortedAndHow, [[4, 3, 2, 1]], testIsActive);
compareInConsole(ANSWERS.yesDown, isSortedAndHow, [[3, 3, 2, 1]], testIsActive);
compareInConsole(ANSWERS.yesDown, isSortedAndHow, [[3, 2, 1, 1]], testIsActive);



// Среди решений других пользователей в топе именно такие. Много вариаций, но все сводится к двум arr.every(...)
// Но мне не понравилась идея двойного прохода по массиву от начала до конца, поэтому на этапе размышлений над
// способом реализации я счел такое решение неподходящим.

function isSortedAndHow2(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
        arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}