//Provjeriti da li je zadani broj Armstrongov broj.

const prompt = require("prompt-sync")({ sigint: true });

const broj = prompt("Unesi trocifreni broj : ");

if (parseInt(broj) < 100 || parseInt(broj) > 999) {
  console.log("Broj nije trocifren!");
  return;
}

let splitted = broj.split("");
let formatiran =
  splitted[0] * splitted[0] * splitted[0] +
  splitted[1] * splitted[1] * splitted[1] +
  splitted[2] * splitted[2] * splitted[2];
if (formatiran === parseInt(broj)) {
  console.log("Broj je armstrongov!");
} else {
  console.log("Broj nije armstrongov");
}
