const solution = function(firstArray, secondArray) {
    let sumOfAbs = 0;

    firstArray.forEach((_, i) => {
        sumOfAbs += (Math.abs(firstArray[i] - secondArray[i]))**2;
    })

    return sumOfAbs/firstArray.length
}

// Второй вариант, просто хочу короткий и с reduce. Как по мне, так делать не стоит:
const solution2 = (firstArr, secondArr) => { return firstArr.reduce((acc, elem, index) => {return acc + (Math.abs(elem - secondArr[index])**2)}, 0)/firstArr.length}

// После отправки понял, что мы же возводим в квадрат.
// Получается, нам не нужно, чтобы возводимое число было положительным

const solution3 = function(firstArray, secondArray) {
    let sum = 0;

    firstArray.forEach((_, i) => {
        sum += (firstArray[i] - secondArray[i])**2;
    })

    return sum/firstArray.length
}

console.log(solution([1,2,3],[3,2,1]))
console.log(solution2([1,2,3],[3,2,1]))
console.log(solution3([1,2,3],[3,2,1]))
