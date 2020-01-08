const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

}

const sum = (arr) => {
  return arr.reduce((a, b) => a + b);
}

const comboSum = (arr, sum) => {
  // Not working yet
  if (arr.reduce((a, b) => a + b) === sum) {
    return true;
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}