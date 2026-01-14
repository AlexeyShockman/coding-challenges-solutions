/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    k = k % nums.length;

    function reverseArr(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverseArr(0, nums.length - 1);
    reverseArr(0, k-1);
    reverseArr(k, nums.length - 1);
}


// k может быть больше длины массива

let nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.log(nums);


// Первое решение, которое хочется использовать, это, конечно
// function rotate(nums, k) {
//     k = k % nums.length;
//
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
// }
// но оно не пройдет проверки на больших числах