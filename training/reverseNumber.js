// -123 => -321

const {compareInConsole} = require('../utils/console.js');


function reverseNumber(n) {
    const minusMultiplier = n > 0 ? 1 : -1;

    return (minusMultiplier * n).toString().split('').reverse().join('') * minusMultiplier;
}

function reverseNumber2(n) {
    return Math.sign(n) * Number(String(Math.abs(n)).split('').reverse().join(''));
}

const testFlag = false;
const testFlag2 = true;

compareInConsole(-321, reverseNumber, [-123], testFlag);
compareInConsole(123443, reverseNumber, [344321], testFlag);
compareInConsole(0, reverseNumber, [0], testFlag);

compareInConsole(-321, reverseNumber2, [-123], testFlag2);
compareInConsole(123443, reverseNumber2, [344321], testFlag2);
compareInConsole(0, reverseNumber2, [0], testFlag2);
