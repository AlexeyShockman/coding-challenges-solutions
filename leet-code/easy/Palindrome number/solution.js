/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x<0) return false;
    const stringX = x.toString();
    for (let i = 1; i <= stringX.length/2; i++) {
        if (stringX[i-1] !== stringX[stringX.length - (i)]) return false
    }
    return true
};

// короткий вариант
const isPalindrome2 = x => x >= 0 && String(x) === [...String(x)].reverse().join('');

// математический и эффективный по сложности
const isPalindrome3 = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return x === reversed || x === Math.floor(reversed / 10);
};

let testCases = [121, 11, 9121219, 12345, -121, 0];

console.log('----- isPalindrome -----')
testCases.map(n => console.log(`${n} => ${isPalindrome(n)}`))
console.log('----- isPalindrome2 -----')
testCases.map(n => console.log(`${n} => ${isPalindrome2(n)}`))
console.log('----- isPalindrome3 -----')
testCases.map(n => console.log(`${n} => ${isPalindrome3(n)}`))
