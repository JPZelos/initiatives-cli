const inquirer = require("inquirer");
const dices = require("./dices");
const initiativeRoller = require("./initiativeRoller");

async function printMenu() {
  const choices = [
    "Add character",
    "Remove character",
    "Roll initiatives!",
    "exit"
  ];
  const question = {
    type: "list",
    name: "menu",
    message: "Select an action",
    choices
  };
  const result = await inquirer.prompt([question]);
  return result.menu;
}

async function addCharacter() {
  const nameQuestion = {
    type: "input",
    name: "name",
    message: "Name"
  };
  const modQuestion = {
    type: "input",
    name: "mod",
    message: "Initiative mod"
  };
  const character = await inquirer.prompt([nameQuestion, modQuestion]);
  return character;
}

async function removeCharacter() {}

function rollInitiatives(characters) {
  const initiatives = characters.map(character => {
    const mod = parseInt(character.mod, 10);
    const initiative = initiativeRoller(dices.d20, mod);
    return { name: character.name, initiative };
  });
  return initiatives;
}

async function printCharacterInitiatives(characterInitiatives) {
  const choices = characterInitiatives
    .sort((a, b) => b.initiative - a.initiative)
    .map(character => character.name + " " + character.initiative);
  const question = {
    type: "list",
    name: "initiatives",
    message: "Initiatives",
    choices
  };

  await inquirer.prompt([question]);
}

async function main() {
  const characters = [];
  let exit = false;

  while (!exit) {
    const selection = await printMenu();

    switch (selection) {
      case "Add character": {
        const character = await addCharacter();
        characters.push(character);
        break;
      }
      case "Roll initiatives!": {
        const characterInitiatives = rollInitiatives(characters);
        await printCharacterInitiatives(characterInitiatives);
        break;
      }
      case "exit": {
        exit = true;
        break;
      }
      default: {
        console.error("Cannot process selection: " + selection);
        break;
      }
    }
  }
}

main();
