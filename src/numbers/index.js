const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

}

const sum = (arr) => {
  return arr.reduce((a, b) => a + b);
}

const comboSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[i] + arr[n] === sum) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}