// You do not have a ship to cross this sea.
// The Wall blocks your way
const { compareInConsole } = require('../../../utils/console.js');

function finalDestination (currentPos, directions) {
    const map = [
        ["Deepwood Motte", "Shadow Tower", "Castle Black", "Eastwatch", "Bay of Seals"],
        [ "The Stony Shore", "Torrhen's Square", "Winterfell", "The Dreadfort", "Karhold"],
        [ "Flint's Finger", "Barrowtown", "Moat Cailin", "White Harbour", "Widow's Wat"],
        [ "Pyke", "Seagard", "The Twins", "Sisterton", "The Fingers"],
        [ "The Crag", "Riverrun", "Darry", "The Eyrie", "Gulltown"],
        [ "Castamere", "Acorn Hall", "Harrenhal", "Maidenpool", "Dragonstone"],
        [ "Lannisport", "Stoney Sept", "King's Landing", "Blackwater Bay", "Sharp Point"],
        [ "High Garden", "Bitterbridge", "King's Wood", "Storm's End", "Evenfall"],
        [ "Old Town", "Horn Hill", "Prince's Pass", "Planky Town", "Sunspear"],
    ];

    const errorsText = {
        sea: `You do not have a ship to cross this sea.`,
        wall: `The Wall blocks your way`,
    }

    const compass = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
}

    let currentY = map.findIndex(row => row.includes(currentPos));
    let currentX = map[currentY].indexOf(currentPos);

    for (const point of directions.split(' ')) {
        const [, dir, distanceStr] = point.match(/^([NESW])(\d+)$/);
        const distance = Number(distanceStr);
        const [dy, dx] = compass[dir];

        currentY += dy * distance;
        currentX += dx * distance;

        if (currentY < 0) return errorsText.wall;
        if (currentY >= map.length || currentX < 0 || currentX >= map[0].length)
            return errorsText.sea;
    }

    return map[currentY][currentX];
}

const testStatus = true;
compareInConsole("Winterfell", finalDestination, ["King's Landing", "N5"], testStatus);
compareInConsole("Riverrun", finalDestination, ["King's Landing", "N2 W1"], testStatus);
compareInConsole("Sunspear", finalDestination, ["King's Landing", "S2 E2"], testStatus);
compareInConsole("Riverrun", finalDestination, ["Winterfell", "W1 S3"], testStatus);



// Была идея сделать навигацию как в это было в Connect 4, но вариант с 4 ифами просто короче и понятнее.
// Еще думал посчитать сразу итоговую позицию через reduce, но понял, что в таком случае мы можем пропустить
// выход за границы поля где-то по пути

// const compass = {
//     n: [-1, 0],
//     s: [1, 0],
//     w: [0, -1],
//     e: [0, 1]
// }
// const adaptiveMap = directions.map(point => {
//     let [, dir, steps] = point.match(/^([NESW])(\d+)$/)
//     return [...compass[dir].map(coordinate => coordinate*steps), dir]
// })

// По итогу все таки взял навигацию из Connect 4. Она выглядела лучше, чем это:
// if (step.dir === 'N') currentY -= step.distance;
// if (step.dir === 'S') currentY += step.distance;
// if (step.dir === 'W') currentX -= step.distance;
// if (step.dir === 'E') currentX += step.distance;
