//Izračunati faktorijel broja.

const prompt = require("prompt-sync")({ sigint: true });

const broj = prompt("Unesite broj : ");
let proizvod = 1;
for (let i = 1; i <= broj; i++) {
  proizvod = proizvod * i;
}
console.log("Faktorijel je : ");
console.log(proizvod);
