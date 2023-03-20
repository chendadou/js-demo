// 1. 从小到大排序
const sortNum = (a, b) => (a - b);
const sortArr1 = (a, b) => (a[1] - b[1]);

// 2. 从大到小排序
const sortNumB = (a, b) => (b - a);
const sortArr0 = (a, b) => (b[0] - a[0]);

// 3. 数据结构类型的判断
const getType = (item) => {
  const itemType = Object.prototype.toString.call(item);
  return itemType.slice(8, -1);
};

// 4. 数字类数组求和
const arraySum = arr => {
  if (getType(arr) !== 'Array')
    return 0;
  let sum = 0;
  arr.forEach(val => sum += val);
  return sum;
};

// 5. 统计字符出现的次数
const totalChar = str => {
  const length = str.length;
  const obj = {};

  for (let i = 0; i < length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  return obj;
}

module.exports = {
  sortNum,
  sortNumB,
  sortArr0,
  sortArr1,
  getType,
  arraySum,
  totalChar,
}
