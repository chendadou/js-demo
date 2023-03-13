// 135. Candy(Hard)

const { getType, arraySum } = require('../utils');

const demo = [1, 0, 2];
const demo2 = [1, 2, 87, 87, 87, 2, 1];

const candy = ratings => {
  if (getType(ratings) !== 'Array') return 0;

  const length = ratings.length;
  if (ratings.length < 2) return length;

  const num = new Array(length).fill(1);

  // 从左往右遍历  
  for (let i = 0; i < length - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      num[i + 1] = num[i] + 1;
    }
  }

  // 从右往左遍历 
  for (let j = length - 1; j > 0; j--) {
    if (ratings[j - 1] > ratings[j]) {
      num[j - 1] = Math.max(num[j - 1], (num[j] + 1));
    }
  }

  return arraySum(num);
}

const result = candy(demo2);
console.log('result: ', result);
