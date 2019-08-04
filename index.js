const dices = require("./dices");
const initiativeRoller = require("./initiativeRoller");
const utils = require("./utils");

function main() {
  const args = process.argv.slice(2);
  const names = args.filter((value, index) => utils.isEven(index));
  const mods = args.filter((value, index) => utils.isOdd(index));
  let characters = utils.zip(names, mods);
  characters = characters.map(value => {
    const mod = parseInt(value[1], 10);
    const initiative = initiativeRoller(dices.d20, mod);
    return [value[0], initiative];
  });
  characters.sort((a, b) => b[1] - a[1]);
  console.log(characters);
}

main();
