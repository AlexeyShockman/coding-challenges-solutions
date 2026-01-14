/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[res++] = nums[i];
        }
    }

    return res;
}


let nums = [0,0,1,1,1,2,2,3,3,4];
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates(nums));
console.log(nums);

// хотелось бы это задачу решить через set, но по условиям нельзя

// function removeDuplicates(nums) {
//     return [...(new Set(nums))].length;
// }

// и она очень похожа на 27 задачу по способу решения