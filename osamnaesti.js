//Provjeriti da li je zadati broj savršen broj.
const prompt = require("prompt-sync")({ sigint: true });
let broj = prompt("Unesite broj : ");

let suma = 0;
for (i = 1; i < broj; i++) {
  if (broj % i == 0) {
    suma = suma + i;
  }
}
if (suma == broj) {
  console.log(`Broj ${broj} je savrsen`);
} else {
  console.log(`Broj ${broj} nije savrsen`);
}
