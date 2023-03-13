// 435. Non-overlapping Intervals(Medium)

const { getType, sortArr } = require('../utils');

const demo = [[1, 2], [2, 4], [1, 3]];

const eraseOverlapIntervals = (intervals) => {

  if (getType(intervals) !== 'Array')
    return 0;

  const length = intervals.length;
  if (length === 0)
    return 0;

  intervals.sort(sortArr);

  let total = 0;
  let prev = intervals[0][1];

  for(let i = 1; i < length; i++){
    if (intervals[i][0] < prev) {
      total += 1;
    } else {
      prev = intervals[i][1];
    }
  }

  return total;
}

const result = eraseOverlapIntervals(demo);
console.log('result: ', result);
