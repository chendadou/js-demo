// 605. Can Place Flowers(Easy)

const { getType } = require('../utils');

const flowerbed = [1, 0, 0, 0, 1];
const n1 = 1;
const n2 = 2;

const canPlaceFlowers = (flowerbed, n) => {
  if (getType(flowerbed) !== 'Array' || typeof n !== 'number') return false;

  const length = flowerbed.length;
  if (length === 0) return false;

  if (length === 1) {
    if (n > 0 && flowerbed[0] === 0) {
      flowerbed[0] = 1;
      n--;
    }
  } else if (length === 2) {
    if (n > 1 && flowerbed[0] === 0 && flowerbed[1] === 0) {
      flowerbed[0] = 1;
      n--;
    }
  } else {
    for (let i = 0; i < length; i++) {
      if (i === 0) {
        if (n > 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1;
          n--;
        }
      } else if (i === length - 1) {
        if (n > 0 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
          flowerbed[i] = 1;
          n--;
        }
      } else {
        if (n > 0 && flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1;
          n--;
        }
      }
    }
  }

  if (n === 0) return true;
  return false;
};

const resultA = canPlaceFlowers(flowerbed, n1);
const resultB = canPlaceFlowers(flowerbed, n2);
console.log('resultA: ', resultA);
console.log('resultB: ', resultB);
