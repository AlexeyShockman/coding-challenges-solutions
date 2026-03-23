/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const length = nums.length;
    const result = new Array(length).fill(1);


    let prefix = 1;
    let postfix = 1;

    for (let i = 1; i < length; i++) {
        prefix *= nums[i-1];
        result[i] *= prefix;
    }

    for (let i = length-2; i >= 0; i--) {
        postfix *= nums[i+1];
        result[i] *= postfix;
    }

    return result;

};


console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([1,2,3,4,5,6,7]));



//изначально я думал одним циклом обойтись, но это менее читаемое решение в котором легче ошибиться с индексами
const productExceptSelfV2 = function(nums) {
    const result = Array.from({length: nums.length}).fill(1);

    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] *= prefix;
        prefix *= nums[i];

        result[nums.length - 1 - i] *= postfix;
        postfix *= nums[nums.length - 1 - i];
    }

    return result;

};