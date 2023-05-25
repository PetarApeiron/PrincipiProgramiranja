//Provjeriti da li je zadani broj prost broj.
const prompt = require("prompt-sync")({ sigint: true });

const a = prompt("Unesite broj : ");
let isProst = true;
for (let i = 2; i < a; i++) {
  if (a % i == 0) {
    isProst = false;
    break;
  }
}
if (isProst) {
  console.log("Broj je prost");
} else {
  console.log("Broj nije prost");
}
