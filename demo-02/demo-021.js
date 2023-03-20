// 88. Merge Sorted Array (Easy)

const demo01 = [1,2,3,0,0,0];
const demoLength01 = 3;
const demo02 = [2,5,6];
const demoLength02 = 3;

const merge = function(nums1, m, nums2, n) {
  let pos = (m--) + (n--) - 1;

  while (m >= 0 && n >= 0) {
    nums1[pos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }

  while (n >= 0) {
    nums1[pos--] = nums2[n--];
  }

  return nums1;
};

const result = merge(demo01, demoLength01, demo02, demoLength02);
console.log('result: ', result);
