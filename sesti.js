//Pronaći najveći zajednički dijelilac (NZD) dva broja.

const prompt = require("prompt-sync")({ sigint: true });

const a = prompt("Unesite prvi broj : ");
const b = prompt("Unesite drugi broj : ");
niz1 = [];
niz2 = [];
for (i = 0; i <= a; i++) {
  if (a % i == 0) {
    niz1.push(i);
  }
}
for (i = 0; i <= b; i++) {
  if (b % i == 0) {
    niz2.push(i);
  }
}
let niz = niz1.concat(niz2);
let rezultat = niz.filter(
  (a, i, aa) => aa.indexOf(a) === i && aa.lastIndexOf(a) !== i
);
console.log("Najveci zajednici dijelilac je : ");
console.log(rezultat[rezultat.length - 1]);
