//prototype

function readthis(infos) {
  let choosingcode = prompt("Which one do you want to count?");
  choosingcode = choosingcode.toUpperCase();

  let count = 0;

  for (let i = 0; i < infos.length; i++) {
    if (infos[i] === choosingcode) {
      count++;
    }
  }

  console.log(`The code "${choosingcode}" appears ${count} times.`);
}

let codes = ["C1", "C2", "C1", "C3", "C2", "C1"];


readthis(codes);




