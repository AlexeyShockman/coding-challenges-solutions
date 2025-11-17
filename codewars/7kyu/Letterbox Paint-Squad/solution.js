const {compareInConsole} = require("../../../utils/console");

function paintLetterboxes (start, end) {
    const frequency = Array.from({length: 10}, () => 0);

    for (let i = start; i <= end; i++) {
        for (const char of String(i)) {
            frequency[char]++;
        }
    }
    return frequency;
}

const testIsActive = true;
compareInConsole([1,9,6,3,0,1,1,1,1,1], paintLetterboxes, [125, 132], testIsActive, '125 ... 132');


// моя реализация первой версии через объект, но после написания, стало понятно, что объект то нам тут и не нужен
function paintLetterboxesObjVersion (start, end) {
    const frequency = {};

    for (let i = start; i <= end; i++) {
        for (const char of (i).toString()) {
            frequency[char] = (frequency[+char] || 0) + 1;
        }
    }
    let freqArr = [];
    for (let i = 0; i <= 9; i++) {
        freqArr.push(frequency[i] || 0);
    }
    return freqArr;
}


// Позабавил способ итерирования через map с таким приведением:
// Так явно короче, но не уверен, что мне нравится такой подход
//  [...''+i].map(x=>a[x]++)