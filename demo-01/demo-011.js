// 135. Candy

const demo = [1, 0, 2];

const whatType = item => {
  const itemType = Object.prototype.toString.call(item);
  return itemType.slice(8, -1);
}

const sum = arr => {
  if (whatType(arr) !== 'Array')
    return 0;
  let sum = 0;
  arr.forEach(val => sum += val);
  return sum;
}

const candy = ratings => {
  if (whatType(ratings) !== 'Array')
    return 0;

  const length = ratings.length;
  if (ratings.length < 2)
    return length;
  const num = new Array(length).fill(1);

  for (let i = 0; i < length - 1; i++) {
    if (ratings[i] > ratings[i + 1]) {
      num[i] = num[i + 1] + 1;
    }
  }

  for (let j = length - 1; j > 0; j--) {
    if (ratings[j] > ratings[j - 1]) {
      num[j] = Math.max(num[j], (num[j - 1] + 1));
    }
  }

  return sum(num);
}

const result = candy(demo);
console.log(result);
