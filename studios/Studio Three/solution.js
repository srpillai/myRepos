// String modification:
const input = require('readline-sync');
let str = "LaunchCode";

let numLetters = input.question('How many letters to shift? ');

if (numLetters <= str.length) {
  let newWord = str.slice(numLetters) + str.slice(0,numLetters);
  console.log(`'${str}' converts to '${newWord}'.`);
} else {
  console.log(`OOPS! Not enough characters in '${str}' to move ${numLetters}. Here's the result of moving just 3:`);
  console.log(`'${str}' converts to '${str.slice(3) + str.slice(0,3)}'.`)
}

// Array and string conversion:
let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

// Note to TAs: The students are NOT expected to use a loop for this solution. We included one so you can run the code and quickly see the result for each protoArray string.
// The students might use the if/else if structure, but replace strings[i] with one of the protoArray variable names. Alternatively, they might code the
// appropriate protoArray.split()... statement for each option and then print the results.
for (let i = 0; i < strings.length; i++) {
  if (strings[i].includes(', ')) {
    console.log(strings[i].split(', ').reverse().join(','));
  } else if (strings[i].includes(';')) {
    console.log(strings[i].split(';').sort().join('-'));
  } else if (strings[i].includes(' ')) {
    console.log(strings[i].split(' ').sort().reverse().join(' '));
  } else if (strings[i].includes(',')) {
    console.log(strings[i].split(',').reverse().join(','));
  }
}

// Bonus missions:
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
let petsArray = pets.split(',').sort();
let sleepArray = sleepAids.split(',').sort();

let cargoHold = [foodArray, equipmentArray, petsArray, sleepArray];
console.log(cargoHold);

let cabinetNumber = Number(input.question("Select a cabinet:"));
let item = input.question("Search for item: ");

if (cabinetNumber >=0 && cabinetNumber < cargoHold.length) {
  console.log(`The cabinet contains: ${cargoHold[cabinetNumber]}.`);
  if (cargoHold[cabinetNumber].includes(item.toLowerCase())) {
    console.log(`Cabinet '${cabinetNumber}' DOES contain ${item}.`);
  } else {
    console.log(`Cabinet '${cabinetNumber}' DOES NOT contain ${item}.`);
  }
} else {
  console.log("Invalid entry.");
}
