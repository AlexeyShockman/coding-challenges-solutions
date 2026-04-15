function luckyTicket(str) {
    const charCodeOfA = 'a'.charCodeAt(0);
    let bestResult = str.length;
    let currentResult = str.length;
    let indexOfSlice = 0;

    let leftSideFrequencyDictionary = new Array(26).fill(0); //a-z
    let rightSideFrequencyDictionary = new Array(26).fill(0); //a-z

    for (let i = 0; i < str.length; i++) {
        rightSideFrequencyDictionary[str.charCodeAt(i)-charCodeOfA]++;
    }

    for (indexOfSlice; indexOfSlice < str.length - 1; indexOfSlice++) {
        const letterIndex = str.charCodeAt(indexOfSlice)-charCodeOfA;

        const oldDiff = Math.abs(rightSideFrequencyDictionary[letterIndex] - leftSideFrequencyDictionary[letterIndex]);

        rightSideFrequencyDictionary[letterIndex]--;
        leftSideFrequencyDictionary[letterIndex]++;

        const newDiff = Math.abs(rightSideFrequencyDictionary[letterIndex] - leftSideFrequencyDictionary[letterIndex])
        currentResult -= (oldDiff - newDiff);

        if (bestResult > currentResult) {
            bestResult = currentResult;
        }

    }
 
    return bestResult;
}

console.log(luckyTicket('book'), 'expected: 2');
console.log(luckyTicket('mewmwe'), 'expected: 0');
console.log(luckyTicket('bbaaaa'), 'expected: 2');
console.log(luckyTicket('ww'), 'expected: 0');
console.log(luckyTicket('abcdefa'), 'expected: 5');
console.log(luckyTicket('abcdefadabcdefa'), 'expected: 1');

// Тест кейсы:
//         assert.strictEqual(luckyTicket("book"), 2);
//         assert.strictEqual(luckyTicket("mewmwe"), 0);
//         assert.strictEqual(luckyTicket("bbaaaa"), 2);
//         assert.strictEqual(luckyTicket("ww"), 0);
//         assert.strictEqual(luckyTicket("abcdefa"), 5);


/*
Думаю, что тут нужно использовать подход с частотными словарями. Всего у нас может быть 28 букв английского алфавита.
Значит можно просто создать массив из 26 элементов и с помощью юникода определять индекс буквы, после чего плюсовать
количество в массив по индексу буквы.
Останется просто пройтись по частотному массиву и добавить по единичке на каждую букву, которая встречается нечетное количество раз.
Это и будет ответом.
В своих рассуждениях я не учел, что двигать буквы нельзя, поэтому мой подход изначальный не очень сработал. Переработал
код так, чтобы он исследовал все возможные точки разделения на два подмножества букв и искал оптимальное.

Подумал, что не стоит на каждую итерацию крутить полный пересчет значения, а достаточно просто понять, как оно изменилось.
Теперь все работает чуть эффективнее
 */
