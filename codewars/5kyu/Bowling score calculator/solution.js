const { compareInConsole } = require('../../../utils/console.js');

function bowlingScore(r) {
    let acc = 0;
    let step = 0;

    for (let f = 1; f < 10; f++) {
        if (r[step] === 10) { //strike!
            acc += 10 + r[step + 1] + r[step + 2];
            step++;
            continue;
        }

        if (r[step] + r[step + 1] === 10) { //spare!
            acc += 10 + r[step + 2];
            step += 2;
            continue;
        }
        acc += r[f * 2 - 2] + r[f * 2 - 1];
        step += 2;

    }

    for (; step < r.length; step++) {
        acc += r[step];
    }

    return acc;
}

const isNeedToTest = true;
compareInConsole(0, bowlingScore,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], isNeedToTest);
compareInConsole(10, bowlingScore,[1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], isNeedToTest);
compareInConsole(190, bowlingScore,[9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9], isNeedToTest);
compareInConsole(300, bowlingScore,[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], isNeedToTest);
compareInConsole(11, bowlingScore,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0], isNeedToTest);
compareInConsole(12, bowlingScore,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0], isNeedToTest);
compareInConsole(200, bowlingScore,[10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10], isNeedToTest);
compareInConsole(200, bowlingScore, [10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10], isNeedToTest);
