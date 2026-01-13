/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums, val) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[res++] = nums[i];
        }
    }

    return res;
}


let nums = [1,2,3,4,3];
console.log(removeElement(nums, 3));
console.log(nums);