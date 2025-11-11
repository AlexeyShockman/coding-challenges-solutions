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

// Первый вариант я решил накидать для того, чтобы получить максимально быстрое решение без сложностей.
// Второй рекурсивный вариант просто из спортивного интереса

function sqInRectRecursive(l, w) {
    if (l === w) return null;
    if (l < w) [l, w] = [w, l];

    return [w, ...(sqInRectRecursive(w, l - w) || [w])];
}

// Вот еще вариация с рекурсивным подходом, который я уже с codewars взял:
function sqInRectRecursive3 (a, b, initial = true){
    if (a === b) { return initial ? null : [a] }
    const min = Math.min(a, b)
    const max = Math.max(a, b)

    return [min, ...sqInRectRecursive3(max - min, min, false)]
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


