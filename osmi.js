// Izracunati kvadratni korijen zadanog broja

const prompt = require("prompt-sync")({ sigint: true });

const broj = prompt("Unesite broj : ");
let kvadrat = Math.sqrt(broj);
console.log(kvadrat);
