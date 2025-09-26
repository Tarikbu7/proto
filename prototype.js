//prototype

let codes = ["C1", "C2", "C1", "C3", "C2", "C1"];

let choosingcode = prompt("Which code do you want to count? (e.g., C1)");//what gonna shows on window

choosingcode = choosingcode.toUpperCase();// for min and maj letters

let count = 0;

for (let i = 0; i < codes.length; i++) {
  if (codes[i] === choosingcode) {
    count++;
  }
}


console.log(`The code "${choosingcode}" appears ${count} times.`);






