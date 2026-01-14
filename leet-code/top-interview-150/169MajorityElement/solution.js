/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let count = 0;
    let candidate;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}


let nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));


// Самым привлекательным показался алгоритм большинства голосов Бойера-Мура
// И реализуется он супер просто. Кажется, эта задача направлена именно на выявление знания такого алгоритма
// Если отказаться от использования этого алгоритма, то я бы решал эту задачу просто через map.
// Как вариант, если подумать над условием задачи, то можно еще просто отсортировать массив. У него в середине окажется нужное нам число