// 167. Two Sum II - Input array is sorted (Easy)

const num = [2, 3, 4];
const tar = 6;

// result: [1, 3]

const twoSum = function(numbers, target) {
  const length = numbers.length;
  const result = [];

  let l = 0;
  let r = length - 1;
  let sum = 0;
  
  while(l < r) {
    sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    else if (sum > target) r--;
    else l++;
  }
  
  result[0] = -1;
  result[1] = -1;
  return result;
};

const result = twoSum(num, tar);
console.log('result: ', result);
