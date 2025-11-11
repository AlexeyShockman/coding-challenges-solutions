// понравилась эта задача, просто потому, что мне кажется, что я быстро понял, как без переборов ее решить :)
// набор букв складывается в полиндром, если у него все буквы по парам и (ситуативно) 1 без пары.
// по тест кейсам еще видно, что просто 1 буква и пустая строка тоже должны быть полиндромом.

const { compareInConsole } = require('../../../utils/console.js');


function permuteAPalindrome (input) {
    const withoutPair = new Set();

    for (const char of input) {
        if (withoutPair.has(char)) withoutPair.delete(char);
        else withoutPair.add(char);
    }

    return withoutPair.size < 2;

}


// Вариация с редьюсом. Он вроде бы и изящнее, но мне собственное решение больше нравится по читаемости.
const permuteAPalindromeReduce = (input) =>
    [...input].reduce((set, char) => {
        set.has(char) ? set.delete(char) : set.add(char);
        return set;
    }, new Set()).size < 2;

// Вот такая еще версия была среди решений:
// но тут применяется сортировка, что усложняет алгоритм
function permuteAPalindrome2 (input) {
    return input
        .split('')
        .sort((a, b) => a.charCodeAt() - b.charCodeAt())
        .join('')
        .replace(/(.)\1/g, '')
        .length <= 1;
}


const testIsActive = true;
const testIsActiveReduceVariant = true;

compareInConsole(true, permuteAPalindrome, ['12321'], testIsActive);
compareInConsole(true, permuteAPalindrome, [''], testIsActive, 'тест с пустой строкой');
compareInConsole(true, permuteAPalindrome, ['1'], testIsActive, 'тест с единственным символом');
compareInConsole(true, permuteAPalindrome, ['qq22eer'], testIsActive);
compareInConsole(false, permuteAPalindrome, ['qq22eerw'], testIsActive, 'неполиндромная строка');

compareInConsole(true, permuteAPalindromeReduce, ['12321'], testIsActiveReduceVariant);
compareInConsole(true, permuteAPalindromeReduce, [''], testIsActiveReduceVariant, 'тест с пустой строкой');
compareInConsole(true, permuteAPalindromeReduce, ['0'], testIsActiveReduceVariant, 'тест с единственным символом');
compareInConsole(false, permuteAPalindromeReduce, ['12'], testIsActiveReduceVariant, 'неполиндромная строка');
