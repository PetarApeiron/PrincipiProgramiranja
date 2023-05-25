//Provjeriti da li je zadani string palindrom.

const prompt = require("prompt-sync")({ sigint: true });

const string = prompt("Unesite string : ");

function reverse(string) {
  return string.split("").reverse().join("");
}
let novistring = reverse(string);
console.log(novistring);
if (string.toLowerCase() === novistring.toLowerCase()) {
  console.log("Rijec je palindrom");
} else {
  console.log("Rijec nije palindrom");
}
