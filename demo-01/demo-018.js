// 665. Non-decreasing Array (Easy)

var demo = [-1, 4, 2, 3];

// 最多改变一个元素的情况下，能否变成非递减数列

// [1, 2, 3]      true
// [4, 2, 3]      true
// [4, 2, 1]      false
// [3, 4, 2, 3]   false
// [5, 7, 1, 8]   true
// [-1, 4, 2, 3]  true

// ......

const checkPossibility = function (nums) {
  const length = nums.length;
  let count = 0;

  for (let i = 0; i < length - 1; i++) {
    const x = nums[i];
    const y = nums[i + 1];

    if (x > y) {
      count++;
      if (count > 1)
        return false;
      if (i > 0 && nums[i - 1] > y) {
        nums[i + 1] = x;
      }
    }
  }

  return true;
};

const result = checkPossibility(demo);
console.log('result: ', result);
