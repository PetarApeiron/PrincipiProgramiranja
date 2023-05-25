//Zamijeniti svako slovo u stringu sa sledećim slovom u engleskoj abecedi.

const prompt = require("prompt-sync")({ sigint: true });
const string = prompt("Unesite neka slova : ");
let niz = [];
let niz1 = [];
let niz2 = [];
for (i = 0; i < string.length; i++) {
  let ascii = string.charCodeAt(i);
  niz.push(ascii);
}
for (i = 0; i < niz.length; i++) {
  let broj = parseInt(niz[i]) + 1;
  niz1.push(broj);
}
console.log(niz);
for (i = 0; i < niz1.length; i++) {
  if (niz[i] != 122 && niz[i] != 90) {
    niz2.push(String.fromCharCode(niz1[i]));
  } else {
    niz2.push("a");
  }
}
console.log(niz2);
