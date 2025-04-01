const prompt = require('prompt-sync')();

let num1 = Number(prompt('qual o número?'));

let dobro  = num1 * 2;
let triplo = num1 * 3;
let cubo = num1 ** 3;

console.log(`${dobro}, ${triplo}, ${cubo}`);
