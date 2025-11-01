const nums = [0,4,3,0];
const target = 0;

// Самое простое на мой взгляд решение. Но его сложность из-за двух вложенных циклов.
// O(n2)
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i,j]
        }
    }
};

// Более длинное, алгоритмически более верное решение.
// Сложность получается O(n) при сохранении читаемости
const twoSum2 = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};



console.log(twoSum(nums, target));
console.log(twoSum2(nums, target));
