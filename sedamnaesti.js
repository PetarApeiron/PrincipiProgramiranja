//Izračunati sumu svih brojeva između dva zadana broja.
const prompt = require("prompt-sync")({ sigint: true });
let broj = prompt("Unesite prvi broj : ");
let broj1 = prompt("Unesite drugi broj : ");
let najveci = 0;
let najmanji = 0;
if (broj > broj1) {
  najveci = parseInt(broj);
  najmanji = parseInt(broj1) + 1;
} else if (broj1 > broj) {
  najveci = parseInt(broj1);
  najmanji = parseInt(broj) + 1;
} else if (broj == broj1) {
  console.log("Brojevi su isti");
  return;
}
let suma = 0;
for (najmanji; najmanji < najveci; najmanji++) {
  suma = suma + najmanji;
}
console.log(`Suma izmedju ${broj} i ${najveci} je ${suma}`);
