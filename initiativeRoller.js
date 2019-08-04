module.exports = function initiativeRoller(dice, mod) {
  const roll = dice();
  const value = roll + mod;
  return value;
};
