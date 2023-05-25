// Proveriti da li su dva niza jednaka (imaju iste elemente u istom redoslijedu).
const prompt = require("prompt-sync")({ sigint: true });

const clanovi = prompt("Unesite broj clanova : ");
let niz = [];
for (i = 0; i < clanovi; i++) {
  console.log("Unesite broj u niz ");
  const clan = prompt();
  niz.push(clan);
}
let niz1 = [];
for (i = 0; i < clanovi; i++) {
  console.log("Unesite broj u drugi niz ");
  const clan = prompt();
  niz1.push(clan);
}
let isto = 0;
for (i = 0; i < clanovi; i++) {
  if (niz[i] != niz1[i]) {
    isto = isto + 1;
  }
}
if (isto == 0) {
  console.log("niz je identican");
} else {
  console.log("niz nije identican");
}
