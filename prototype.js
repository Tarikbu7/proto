//prototype

let codes = ["C1", "C2", "C1", "C3", "C2", "C1"];

// Function s
function count(choosingcode) {
  let count = 0;
  choosingcode = choosingcode.toUpperCase();
  for (let i = 0; i < codes.length; i++) {
    if (codes[i].toUpperCase() === choosingcode) {
      count++;
    }
  }
  return count;
}

// prompt section
let choosingcodeInput = prompt("which one the you want to count");

// Call the function
let countResult = count(choosingcodeInput);


console.log(`The code "${choosingcodeInput}" appears ${countResult} times.`);

