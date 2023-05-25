//Zamijeniti sve pojave određenog elementa u nizu sa drugim elementom.

const prompt = require("prompt-sync")({ sigint: true });

const clanovi = prompt("Unesite broj clanova : ");
let niz = [];
for (i = 0; i < clanovi; i++) {
  console.log("Unesite broj u niz ");
  const clan = prompt();
  niz.push(clan);
}
let a = prompt("Unesi broj koji zelis zamijeniti u nizu");
let b = prompt("Unesi broj sa kojim ga zelis zamijeniti");
for (i = 0; i <= niz.length; i++) {
  if (a == niz[i]) {
    niz[i] = b;
  }
}
console.log(niz);
