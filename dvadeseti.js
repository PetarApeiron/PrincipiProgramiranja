//Provjeriti da li su svi elementi u nizu jedinstveni (bez ponavljanja).

const prompt = require("prompt-sync")({ sigint: true });

let velicina = prompt("Unesite velicinu prvog niza : ");
let velicina1 = prompt("Unesite velicinu drugog niza : ");
let niz1 = [];
let niz2 = [];
let brojac = 0;
for (i = 0; i < velicina; i++) {
  let broj = prompt(`Unesite ${i + 1} clan niza`);
  niz1.push(broj);
}
for (i = 0; i < velicina1; i++) {
  let broj = prompt(`Unesite ${i + 1} clan niza`);
  niz2.push(broj);
}
for (i = 0; i < niz1.length; i++) {
  for (j = 0; j < niz2.length; j++) {
    if (niz1[i] === niz2[j]) {
      brojac += 1;
    }
  }
}
if (brojac > 0) {
  console.log("Nizovi nisu jedinstveni");
} else {
  console.log("Nizovi su jedinstveni");
}
