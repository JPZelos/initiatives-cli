const dices = require("./dices");

function main() {
  const d20Result = dices.d20();
  console.log("d20 rolled: " + d20Result);
}

main();
