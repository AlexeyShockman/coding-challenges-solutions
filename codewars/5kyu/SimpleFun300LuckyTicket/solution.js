function luckyTicket(str) {

    const charCodeOfA = 'a'.charCodeAt(0);
    let bestResult = Infinity;
    let indexOfSlice = 0;

    let leftSideFrequencyDictionary = new Array(26).fill(0); //a-z
    let rightSideFrequencyDictionary = new Array(26).fill(0); //a-z

    for (let i = 0; i < str.length; i++) {
        rightSideFrequencyDictionary[str.charCodeAt(i)-charCodeOfA]++;
    }

    function compareSides(leftArr, rightArr) {
        let compareResult = 0;
        for (let i = 0; i < 26; i++) {
            compareResult+= Math.abs(leftArr[i] - rightArr[i])
        }
        return compareResult;
    }

    for (indexOfSlice; indexOfSlice < str.length; indexOfSlice++) {
        rightSideFrequencyDictionary[str.charCodeAt(indexOfSlice)-charCodeOfA]--;
        leftSideFrequencyDictionary[str.charCodeAt(indexOfSlice)-charCodeOfA]++;

        const compareResult = compareSides(leftSideFrequencyDictionary, rightSideFrequencyDictionary);
        if (bestResult > compareResult) {
            bestResult = compareResult;
        }

    }

    return bestResult;
}

console.log(luckyTicket('book'), 'expected: 2');
console.log(luckyTicket('mewmwe'), 'expected: 0');
console.log(luckyTicket('bbaaaa'), 'expected: 2');
console.log(luckyTicket('abcdefa'), 'expected: 5');

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
 */
