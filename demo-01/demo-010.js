// 455. Assign Cookies(Easy)

const { sortNum, getType } = require('../utils');

const demo1 = [1, 2];
const demo2 = [1, 2, 3];

const findContentChildren = (children, cookies) => {
  if (getType(children) !== 'Array' || getType(cookies) !== 'Array')
    return 0;

  children.sort(sortNum);
  cookies.sort(sortNum);

  let child = 0;
  let cookie = 0;

  while (child < children.length && cookie < cookies.length) {
    if (children[child] < cookies[cookie]) {
      ++child;
    }
    ++cookie;
  }

  return child;
}

const result = findContentChildren(demo1, demo2);
console.log('result: ', result);
