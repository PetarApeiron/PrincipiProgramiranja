// Izračunati Fibonacci niz za zadani broj elemenata.

const prompt = require("prompt-sync")({ sigint: true });

const broj = prompt("Unesite broj : ");

let prviclan = 0;
let drugiclan = 1;
let rezultat = 0;
for (let i = 0; i < broj; i++) {
  console.log(rezultat);
  rezultat = prviclan + drugiclan;
  drugiclan = prviclan;
  prviclan = rezultat;
}
