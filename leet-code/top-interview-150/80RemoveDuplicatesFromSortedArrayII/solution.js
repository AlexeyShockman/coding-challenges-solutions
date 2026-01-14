/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates2(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[res-2]) {
            nums[res++] = nums[i];
        }
    }

    return res;
}


let nums = [0,0,1,1,1,1,2,3,3];
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
console.log(removeDuplicates(nums));
console.log(nums);

nums = [1,1,1,2,2,3];
// Output: 5, nums = [1,1,2,2,3,_]
console.log(removeDuplicates(nums));
console.log(nums);


// Первое, что пришло в голову было таким решением:
//     function removeDuplicates(nums) {
//         let res = 0;
//
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] !== nums[i+1] && nums[i] !== nums[i-1]) {
//                 nums[res++] = nums[i];
//             }
//             if (nums[i] === nums[i+1] && nums[i] !== nums[i-1]) {
//                 nums[res++] = nums[i];
//
//                 nums[res++] = nums[i];
//                 i++;
//
//             }
//         }
//
//         return res;
//     }
// Но оно ощущалось усложненным. Поэтому я размышлял над решением с дополнительной переменной, которая считает сколько раз встретилось значение
// но мне показалось более интересным сделать это через сравнение с nums[res-2]

// решение со счетчиком я на всякий случай тоже сделал)
// function removeDuplicates(nums) {
//     let res = 0;
//     let count = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[res-1]) {
//             nums[res++] = nums[i];
//             count = 1;
//         } else {
//             if (count < 2) {
//                 nums[res++] = nums[i];
//                 count++;
//             }
//         }
//     }
//
//     return res;
// }