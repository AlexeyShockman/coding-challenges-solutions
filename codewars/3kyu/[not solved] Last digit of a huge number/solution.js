// arr = [1, 2, 3]
// lastDigitOfNumber(arr[i-1], arr[i])
// во время решения я пришел к пониманию, что решение не такое простое, как представлялось.
// Не получится просто последовательно применить lastDigitOfNumber.
// Нужна реализация через функции Эйлера. Отложу пока решение этой задачи

function lastDigit(as){
    if (as.length === 0) return 1;

    const lastDigitOfNumber = (n, m) => {
        let base = n % 10;
        let rem = m % 4;
        let exp = (rem === 0 && m !== 0) ? 4 : rem;
        return base ** exp % 10;
    };

    let res = lastDigitOfNumber(as[as.length-2], as[as.length-1])

    for (let i = as.length - 2; i > 0; i--) {
        res = lastDigitOfNumber(as[i], res)
    }

    return res;
}

console.log('тест lastDigit:', lastDigit([]), 'ожидаемый результат: ', 1)
console.log('тест lastDigit:', lastDigit([0, 0]), 'ожидаемый результат: ', 1)
console.log('тест lastDigit:', lastDigit([44, 86]), 'ожидаемый результат: ', 6)
console.log('тест lastDigit:', lastDigit([12, 30, 21]), 'ожидаемый результат: ', 1)

