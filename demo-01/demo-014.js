// 452. Minimum Number of Arrows to Burst Ballboons(Medium)

const { getType, sortArr } = require('../utils');

const demo = [[10, 16], [2, 8], [1, 6], [7, 12]];

const findMinArrowShots = (points) => {
  if (getType(points) !== 'Array')
    return 0;

  const length = points.length;
  if (length === 0)
    return 0;

  points.sort(sortArr);

  let count = 1;
  let prev = points[0][1];

  for (let i = 1; i < length; i++) {
    if (prev < points[i][0]) {
      prev = points[i][1];
      count++;
    }

  }

  return count;

};

const result = findMinArrowShots(demo);
console.log('result: ', result);
