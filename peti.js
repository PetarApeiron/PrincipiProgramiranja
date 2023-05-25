// Sortirati niz brojeva u silaznom redoslijedu.

const prompt = require("prompt-sync")({ sigint: true });

const clanovi = prompt("Unesite broj clanova : ");
niz = [];
for (i = 0; i < clanovi; i++) {
  const prompt = require("prompt-sync")({ sigint: true });
  const broj = prompt(`Unesite ${i} clan niza`);
  niz.push(parseInt(broj));
}
niz.sort(function (a, b) {
  return a - b;
});
niz.reverse();
console.log(niz);
