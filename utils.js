// 1. 从小到大排序
const sortNum = (a, b) => (a - b);

// 2. 数据结构类型的判断
const getType = (item) => {
  const itemType = Object.prototype.toString.call(item);
  return itemType.slice(8, -1);
};

// 3. 数字类数组求和
const arraySum = arr => {
  if (getType(arr) !== 'Array')
    return 0;
  let sum = 0;
  arr.forEach(val => sum += val);
  return sum;
};

module.exports = {
  sortNum,
  getType,
  arraySum,
}
