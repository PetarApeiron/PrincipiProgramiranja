//Prebrojati koliko puta se određeni karakter pojavljuje u zadatom stringu.

const prompt = require("prompt-sync")({ sigint: true });

const string = prompt("Unesite neki string : ");
const slovo = prompt("Unesite slovo koje zelite da izbrojite u stringu : ");
let brojac = 0;
for (i = 0; i < string.length; i++) {
  if (slovo == string[i]) {
    brojac = brojac + 1;
  }
}
console.log(`Slovo ${slovo} se pojavljuje ${brojac} puta u stringu`);
