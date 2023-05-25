//Izračunati prosjek svih brojeva u nizu.
const prompt = require("prompt-sync")({ sigint: true });

const clanovi = prompt("Broj clanova niza : ");
let niz = [];
for (i = 0; i < clanovi; i++) {
  let broj = prompt(`Unesi ${i + 1} clan niza : `);
  niz.push(broj);
}
let zbir = 0;
for (i = 0; i < niz.length; i++) {
  zbir = zbir + parseInt(niz[i]);
}
let prosjek = zbir / niz.length;
console.log(`Prosjek brojeva u nizu je : ${prosjek}`);
