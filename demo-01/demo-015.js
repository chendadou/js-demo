// 763. Partition Labels(Medium)

const s = 'ababcbacadefegdehijhklij';

const position = str => {
  const length = str.length;
  const obj = {};
  const arr = [];

  // 统计各个字符第一次出现和最后一次出现的位置下标
  for (let i = 0; i < length; i++) {
    if (obj[str[i]]) {
      obj[str[i]][1] = i;
    } else {
      obj[str[i]] = [i, i];
    }
  }

  for (attr in obj) {
    arr.push(obj[attr]);
  }

  const positions = [];
  let prev = arr[0];

  for (let j = 0; j < arr.length; j++) {
    if (positions.length === 0) {
      positions.push(arr[j]);
    } else {
      if (arr[j][0] > prev[1]) {
        positions.push(arr[j]);
        prev = arr[j];
      } else {
        if (arr[j][1] > prev[1]) {
          positions[positions.length - 1][1] = arr[j][1];
        }
      }
    }
  }

  const result = positions.map(item => (item[1] - item[0] + 1));
  return result;

}

console.log('position: ', position(s));
