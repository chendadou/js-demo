// 122. Best Time to Buy and Sell Stock II(Easy)

const demo = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let max = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      max += (prices[i + 1] - prices[i]);
    }
  }

  return max;
}

const result = maxProfit(demo);
console.log('result: ', result);
