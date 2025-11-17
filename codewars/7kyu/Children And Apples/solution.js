// Половина задачи, как мне видится, сводится к тому, чтобы правильно выбросить -1
// Мы за раз отдавать можем ровно 2 яблока.
// Получается, что
//     - среднее арифметическое должно быть целым числом
//     - если среднее арифметическое четное, то все элементы должны быть четными (и с нечетными так же);
//     - нам нужны будут только числа "выше или ниже" среднего арифметического, чтобы посчитать шаги


const {compareInConsole} = require("../../../utils/console");

function minSteps(apples){
    const average = apples.reduce((a, b) => (a + b)) / apples.length;
    if (!Number.isInteger(average)) return -1;

    const parity = average % 2;
    if (!apples.every((e) => e % 2 === parity)) return -1;

    return apples.reduce(
        (steps, man) => steps += (average > man) ? (average - man) / 2 : 0,
        0
    )
}

const testIsActive = {
    pass: true,
    errorData: true
}
compareInConsole(3, minSteps, [[7,15,9,5]], testIsActive.pass);
compareInConsole(0, minSteps, [[7,7,7,7]], testIsActive.pass);
compareInConsole(-1, minSteps, [[7,6,7,8]], testIsActive.errorData);
compareInConsole(-1, minSteps, [[7,7,7,5]], testIsActive.errorData);
compareInConsole(-1, minSteps, [[7,7,7,4]], testIsActive.errorData);
compareInConsole(-1, minSteps, [[7,7,7,3]], testIsActive.errorData);
compareInConsole(-1, minSteps, [[7,2,7,3]], testIsActive.errorData);
compareInConsole(6, minSteps, [[9,11,7,15,23]], true, 'нечетное число детей, average 13, average нет в массиве');

