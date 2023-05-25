//Prebrojati koliko puta se određeni element pojavljuje u nizu.

const prompt = require("prompt-sync")({ sigint: true });

const clanovi = prompt("Unesite broj clanova : ");
let niz = [];
for (i = 0; i < clanovi; i++) {
  console.log("Unesite broj u niz ");
  const clan = prompt();
  niz.push(clan);
}
console.log("Unesite broj koji uporedjujete: ");
const broj = prompt();
let brojac = 0;
for (i = 0; i <= niz.length; i++) {
  if (broj == niz[i]) {
    brojac += 1;
  }
}
console.log(`Broj ${broj} se nalazi ${brojac} puta u nizu`);
