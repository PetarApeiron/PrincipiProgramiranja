//Provjeriti da li je zadati string anagram nekog drugog stringa.

const prompt = require("prompt-sync")({ sigint: true });
const string = prompt("Unesite neka slova : ");
const rijec = prompt("Unesite neku rijec: ");
let a = string.split("");
let b = rijec.split("");
let niz = a.sort();
let niz1 = b.sort();
if (niz.toString() == niz1.toString()) {
  console.log("Rijec je anagram");
} else {
  console.log("Rijec nije anagram:");
}
