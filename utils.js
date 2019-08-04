function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return !isEven(num);
}

function zip(array1, array2) {
  const zipped = array1.map((value, index) => [value, array2[index]]);
  return zipped;
}

const utils = {
  isEven,
  isOdd,
  zip
};

module.exports = utils;
