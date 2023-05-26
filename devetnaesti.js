//Izračunati stepen broja.
const prompt = require("prompt-sync")({ sigint: true });
let broj = prompt("Unesite broj : ");
let stepen = prompt("Unesite stepen ");
console.log(`Stepen ${Math.pow(broj, stepen)}`);
