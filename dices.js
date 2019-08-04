function d20() {
  const result = getRandomInt(1, 20);
  return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dices = {
  d20
};

module.exports = dices;
