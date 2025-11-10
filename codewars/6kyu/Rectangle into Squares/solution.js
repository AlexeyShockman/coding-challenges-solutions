const { compareInConsole } = require('../../../utils/console.js');


function sqInRect(l, w){
    if (l === w) return null;

    let squares = [];

    while (l !== w) {
        if (l > w) {
            squares.push(w);
            l = l - w;
        } else {
            squares.push(l);
            w = w - l;
        }
    }

    squares.push(w);

    return squares ;
}

function sqInRectRecursive(l, w) {
    if (l === w) return null;
    if (l < w) [l, w] = [w, l];

    return [w, ...(sqInRectRecursive(w, l - w) || [w])];
}


const testIsActive = true;
compareInConsole(null, sqInRect, [5, 5], testIsActive);
compareInConsole([3, 2, 1, 1], sqInRect, [5, 3], testIsActive);
compareInConsole([3, 2, 1, 1], sqInRect, [3, 5], testIsActive);
compareInConsole([14, 6, 6, 2, 2, 2], sqInRect, [20, 14], testIsActive);

compareInConsole(null, sqInRectRecursive, [5, 5], testIsActive);
compareInConsole([3, 2, 1, 1], sqInRectRecursive, [5, 3], testIsActive);
compareInConsole([3, 2, 1, 1], sqInRectRecursive, [3, 5], testIsActive);
compareInConsole([14, 6, 6, 2, 2, 2], sqInRectRecursive, [20, 14], testIsActive);


// Первый вариант я решил накидать для того, чтобы получить максимально быстрое решение без сложностей.
// Второй рекурсивный вариант просто из спортивного интереса