//Izračunati sumu svih elemenata u nizu.

const prompt = require("prompt-sync")({ sigint: true });

const clanovi = prompt("Unesite broj clanova : ");
niz = [];
let rezultat = 0;
for (i = 0; i < clanovi; i++) {
  const prompt = require("prompt-sync")({ sigint: true });
  const broj = prompt(`Unesite ${i} clan niza`);
  niz.push(broj);
}
for (i = 0; i < clanovi; i++) {
  rezultat += parseInt(niz[i]);
}
console.log(rezultat);
