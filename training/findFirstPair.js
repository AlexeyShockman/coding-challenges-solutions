const {compareInConsole} = require('../utils/console.js');

// [1, 2, 3, 'q', 3, 4, 5] => 3

function findFirstPair(arr) {
    let seen = new Set();
    for (const el of arr) {
        if (seen.has(el)) return el;
        seen.add(el);
    }
    return false;
}

const testFlag = true;
compareInConsole(3, findFirstPair, [[1, 2, 3, 'q', 3, 4, 5]], testFlag);
compareInConsole('q', findFirstPair, [[1, 2, 'q', 3, 4, 5, 6, 7, 'q', 1, 2, 3]], testFlag);
compareInConsole(1, findFirstPair, [[1, 1, 3, 'q', 3, 4, 5]], testFlag);
compareInConsole(1, findFirstPair, [[1, 1, 3, 'q', 3, 4, 5]], testFlag);
compareInConsole(1, findFirstPair, [[1, 1]], testFlag);
compareInConsole(false, findFirstPair, [[1, 2, 3]], testFlag);
compareInConsole(false, findFirstPair, [[1]], testFlag);

