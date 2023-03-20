// 406. Queue Reconstruction by Height (Medium)

const { sortArr0 } = require('../utils');

const demo = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];

// [[7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]]
// [[7, 0], [6, 1], [7, 1], [5, 0], [5, 2], [4, 4]]
// [[5, 0], [7, 0], [6, 1], [7, 1], [5, 2], [4, 4]]
// [[5, 0], [7, 0], [5, 2], [6, 1], [7, 1], [4, 4]]
// [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]

const reconstructQueue = people => {

  // 1. 身高由高到低排序
  people.sort(sortArr0);

  // 2. 数组长度
  const length = people.length;

  const arr = [];

  for (var i = 0; i < length; i++) {
    
  }
  
  console.log('people', people);
}

reconstructQueue(demo);