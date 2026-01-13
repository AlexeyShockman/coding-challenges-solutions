const merge = function(nums1, m, nums2, n) {
    let totalLength = m+n;
    m--;
    n--;

    for (let i = totalLength-1; i >= 0; i--) {
        if (m >= 0 && (nums1[m] >= nums2[n] || n < 0)) {
            nums1[i] = nums1[m--];
        } else {
            nums1[i] = nums2[n--];
        }
    }
};

let nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1);

nums1 = [0];
merge(nums1, 0, [1], 1);
console.log(nums1);

nums1 = [-1,-1,0,0,0,0];
merge(nums1, 4, [-1,0], 2);
console.log(nums1);